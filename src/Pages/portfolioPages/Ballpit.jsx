import React, { useRef, useEffect } from 'react';
import {
  Clock,
  PerspectiveCamera,
  Scene,
  WebGLRenderer,
  SRGBColorSpace,
  MathUtils,
  Vector2,
  Vector3,
  MeshPhysicalMaterial,
  ShaderChunk,
  Color,
  Object3D,
  InstancedMesh,
  PMREMGenerator,
  SphereGeometry,
  AmbientLight,
  PointLight,
  ACESFilmicToneMapping,
  Raycaster,
  Plane
} from 'three';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment';

// Canvas Manager: sets up scene, camera, renderer, resize & visibility
class CanvasManager {
  #clock = new Clock();
  #animating = false;
  #rafId = null;
  #resizeObserver = null;
  #intersectionObserver = null;
  size = { width: 0, height: 0, ratio: 0, pixelRatio: 0, wWidth: 0, wHeight: 0 };

  constructor({ canvas, rendererOptions, size = 'parent', cameraFov = 50, cameraMinAspect, cameraMaxAspect, maxPixelRatio, minPixelRatio }) {
    this.dom = canvas;
    this.renderer = new WebGLRenderer({ canvas, antialias: true, alpha: true, ...rendererOptions });
    this.renderer.outputColorSpace = SRGBColorSpace;
    this.camera = new PerspectiveCamera(cameraFov);
    this.origFov = this.camera.fov;
    this.cameraMinAspect = cameraMinAspect;
    this.cameraMaxAspect = cameraMaxAspect;
    this.maxPixelRatio = maxPixelRatio;
    this.minPixelRatio = minPixelRatio;
    this.scene = new Scene();
    this.dom.style.display = 'block';

    this._onBeforeRender = () => {};
    this._onAfterRender = () => {};
    this._onAfterResize = () => {};

    this._setupObservers(size);
    this.resize();
  }

  _setupObservers(size) {
    window.addEventListener('resize', () => this._debouncedResize());
    if (size === 'parent' && this.dom.parentNode) {
      this.#resizeObserver = new ResizeObserver(() => this.resize());
      this.#resizeObserver.observe(this.dom.parentNode);
    }
    this.#intersectionObserver = new IntersectionObserver(entries => {
      const entry = entries[0];
      entry.isIntersecting ? this.start() : this.stop();
    }, { threshold: 0 });
    this.#intersectionObserver.observe(this.dom);
    document.addEventListener('visibilitychange', () => {
      document.hidden ? this.stop() : this.start();
    });
  }

  _debouncedResize() {
    clearTimeout(this._resizeTimeout);
    this._resizeTimeout = setTimeout(() => this.resize(), 100);
  }

  resize() {
    const parent = this.dom.parentNode;
    const width = parent ? parent.offsetWidth : window.innerWidth;
    const height = parent ? parent.offsetHeight : window.innerHeight;
    this.size.width = width;
    this.size.height = height;
    this.size.ratio = width / height;
    this._updateCamera();
    this.renderer.setSize(width, height);
    let pr = window.devicePixelRatio;
    if (this.maxPixelRatio && pr > this.maxPixelRatio) pr = this.maxPixelRatio;
    if (this.minPixelRatio && pr < this.minPixelRatio) pr = this.minPixelRatio;
    this.renderer.setPixelRatio(pr);
    this.size.pixelRatio = pr;
    this._onAfterResize(this.size);
  }

  _updateCamera() {
    this.camera.aspect = this.size.width / this.size.height;
    if (this.cameraMinAspect && this.camera.aspect < this.cameraMinAspect) this._adjustFov(this.cameraMinAspect);
    else if (this.cameraMaxAspect && this.camera.aspect > this.cameraMaxAspect) this._adjustFov(this.cameraMaxAspect);
    else this.camera.fov = this.origFov;
    this.camera.updateProjectionMatrix();
    // world size
    const halfFovRad = (this.camera.fov * Math.PI) / 180 / 2;
    this.size.wHeight = 2 * Math.tan(halfFovRad) * this.camera.position.length();
    this.size.wWidth = this.size.wHeight * this.camera.aspect;
  }

  _adjustFov(aspect) {
    const t = Math.tan(MathUtils.degToRad(this.origFov / 2)) / (this.camera.aspect / aspect);
    this.camera.fov = 2 * MathUtils.radToDeg(Math.atan(t));
  }

  start() {
    if (this.#animating) return;
    const loop = (time) => {
      this._onBeforeRender({ delta: this.#clock.getDelta(), elapsed: this.#clock.getElapsedTime() });
      this.renderer.render(this.scene, this.camera);
      this._onAfterRender({ delta: this.#clock.getDelta(), elapsed: this.#clock.getElapsedTime() });
      this.#rafId = requestAnimationFrame(loop);
    };
    this.#animating = true;
    this.#rafId = requestAnimationFrame(loop);
  }

  stop() {
    if (!this.#animating) return;
    cancelAnimationFrame(this.#rafId);
    this.#animating = false;
  }

  dispose() {
    this.stop();
    this.#intersectionObserver.disconnect();
    this.#resizeObserver?.disconnect();
    this.scene.traverse(obj => {
      if (obj.isMesh) {
        obj.geometry.dispose();
        obj.material.dispose();
      }
    });
    this.renderer.dispose();
  }
}

// Physics Engine: manages sphere positions, velocities, collisions
class PhysicsEngine {
  constructor({ count, gravity, friction, wallBounce, maxVelocity }) {
    this.count = count;
    this.gravity = gravity;
    this.friction = friction;
    this.wallBounce = wallBounce;
    this.maxVelocity = maxVelocity;
    this.positionData = new Float32Array(count * 3);
    this.velocityData = new Float32Array(count * 3);
    this.sizeData = new Float32Array(count);
    this._initPositions();
    this._initSizes();
  }

  _initPositions() {
    for (let i = 0; i < this.count; i++) {
      const i3 = i * 3;
      this.positionData[i3] = (Math.random() - 0.5) * 10;
      this.positionData[i3 + 1] = (Math.random() - 0.5) * 10;
      this.positionData[i3 + 2] = (Math.random() - 0.5) * 5;
    }
  }

  _initSizes() {
    for (let i = 0; i < this.count; i++) {
      this.sizeData[i] = Math.random() * 0.5 + 0.5;
    }
  }

  update(delta) {
    for (let i = 0; i < this.count; i++) {
      const idx = i * 3;
      // apply gravity
      this.velocityData[idx + 1] -= delta * this.gravity * this.sizeData[i];
      // friction
      this.velocityData[idx] *= this.friction;
      this.velocityData[idx + 1] *= this.friction;
      this.velocityData[idx + 2] *= this.friction;
      // clamp
      const vx = this.velocityData[idx];
      const vy = this.velocityData[idx + 1];
      const vz = this.velocityData[idx + 2];
      const speed = Math.sqrt(vx*vx + vy*vy + vz*vz);
      if (speed > this.maxVelocity) {
        const scale = this.maxVelocity / speed;
        this.velocityData[idx] *= scale;
        this.velocityData[idx+1] *= scale;
        this.velocityData[idx+2] *= scale;
      }
      // update position
      this.positionData[idx] += this.velocityData[idx];
      this.positionData[idx+1] += this.velocityData[idx+1];
      this.positionData[idx+2] += this.velocityData[idx+2];
      // wall collisions
      for (let axis = 0; axis < 3; axis++) {
        const boundary = axis === 2 ? 2.5 : 5;
        if (Math.abs(this.positionData[idx+axis]) > boundary - this.sizeData[i]) {
          this.positionData[idx+axis] = Math.sign(this.positionData[idx+axis]) * (boundary - this.sizeData[i]);
          this.velocityData[idx+axis] = -this.velocityData[idx+axis] * this.wallBounce;
        }
      }
    }
  }
}

// Rendering Layer: instanced spheres with physical material and lighting
class BallpitInstance extends InstancedMesh {
  constructor(renderer, { count, materialParams, colors, ambientColor, ambientIntensity, lightIntensity }) {
    const geometry = new SphereGeometry(1, 16, 16);
    const pm = new MeshPhysicalMaterial({ ...materialParams });
    super(geometry, pm, count);
    this.count = count;
    this.physics = new PhysicsEngine({ count, gravity: 0.7, friction: 0.8, wallBounce: 0.95, maxVelocity: 0.15 });
    // lighting
    const amb = new AmbientLight(ambientColor, ambientIntensity);
    const pt = new PointLight(colors[0], lightIntensity);
    this.add(amb);
    this.add(pt);
    this.vec = new Object3D();
  }

  update({ delta }) {
    this.physics.update(delta);
    for (let i = 0; i < this.count; i++) {
      const idx = i * 3;
      this.vec.position.set(
        this.physics.positionData[idx],
        this.physics.positionData[idx+1],
        this.physics.positionData[idx+2]
      );
      this.vec.scale.setScalar(this.physics.sizeData[i]);
      this.vec.updateMatrix();
      this.setMatrixAt(i, this.vec.matrix);
    }
    this.instanceMatrix.needsUpdate = true;
  }
}

// Pointer Tracker: simplified for cursor-follow
function setupPointerTracker(canvas, onMove, onLeave) {
  function moveHandler(e) {
    const rect = canvas.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    const y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
    onMove(new Vector2(x, y));
  }
  function leaveHandler() {
    onLeave();
  }
  canvas.addEventListener('pointermove', moveHandler);
  canvas.addEventListener('pointerleave', leaveHandler);
  return () => {
    canvas.removeEventListener('pointermove', moveHandler);
    canvas.removeEventListener('pointerleave', leaveHandler);
  };
}

// Orchestrator: initialize everything
function createBallpit(canvas, config = {}) {
  const manager = new CanvasManager({
    canvas,
    rendererOptions: { alpha: true },
    size: 'parent',
    cameraFov: 50,
    cameraMinAspect: 0.5,
    cameraMaxAspect: 1.5,
    maxPixelRatio: 2
  });

  // environment
  const env = new RoomEnvironment();
  const pmrem = new PMREMGenerator(manager.renderer).fromScene(env).texture;
  manager.scene.environment = pmrem;

  // scene setup
  manager.camera.position.set(0, 0, 20);
  manager.camera.lookAt(0, 0, 0);
  manager.renderer.toneMapping = ACESFilmicToneMapping;

  const sphereGroup = new BallpitInstance(manager.renderer, {
    count: config.count || 200,
    materialParams: config.materialParams || { metalness: 0.5, roughness: 0.5, clearcoat: 1, clearcoatRoughness: 0.15 },
    colors: config.colors || [0xffffff],
    ambientColor: config.ambientColor || 0xffffff,
    ambientIntensity: config.ambientIntensity || 0.5,
    lightIntensity: config.lightIntensity || 1.5
  });
  manager.scene.add(sphereGroup);

  let cleanupPointer;
  if (config.followCursor !== false) {
    cleanupPointer = setupPointerTracker(canvas, uv => {
      // map uv to world space
      const ray = new Raycaster();
      ray.setFromCamera(uv, manager.camera);
      const plane = new Plane(new Vector3(0, 0, 1), 0);
      const pt = new Vector3();
      ray.ray.intersectPlane(plane, pt);
      sphereGroup.physics.positionData[0] = pt.x;
      sphereGroup.physics.positionData[1] = pt.y;
    }, () => {
      // release control
    });
  }

  manager._onBeforeRender = delta => sphereGroup.update(delta);

  return {
    dispose: () => {
      cleanupPointer && cleanupPointer();
      manager.dispose();
    }
  };
}

// React Component: Ballpit
const Ballpit = ({ className = '', count, gravity, friction, wallBounce, followCursor = true }) => {
  const canvasRef = useRef(null);
  const instanceRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    instanceRef.current = createBallpit(canvas, { count, gravity, friction, wallBounce, followCursor });
    return () => instanceRef.current?.dispose();
  }, [count, gravity, friction, wallBounce, followCursor]);

  return <canvas ref={canvasRef} className={`${className} w-full h-full`} />;
};

export default Ballpit;
