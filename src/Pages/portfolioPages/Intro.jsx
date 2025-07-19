import React from 'react';
import DotGrid from './DotGrid';
import SplitText from './SplitText';
import RotatingText from './RotatingText';
// import SplashCursor from './SplashCursor';
// import LetterGlitch from './LetterGlitch';

const Intro = () => {
  const handleAnimationComplete = () => {
    console.log('SplitText animation complete!');
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      {/* Dot Grid Background */}
      <DotGrid
        dotSize={8}
        gap={10}
        baseColor="#1F2937"
        activeColor="#00b4d8"
        proximity={120}
        shockRadius={220}
        shockStrength={5}
        resistance={1000}
        returnDuration={1.5}
      />

      {/* <LetterGlitch
  glitchSpeed={50}
  centerVignette={true}
  outerVignette={false}
  smooth={true}
/> */}

      {/* <SplashCursor /> */}

      {/* Soft Gradient Overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>

      {/* Grid Layout */}
     <div className="absolute inset-0 z-20 flex flex-col lg:flex-row items-center justify-center px-4 sm:px-6 md:px-10 lg:px-20 gap-8 text-center lg:text-left">
  {/* Text Section */}
  <div className="lg:w-1/2 w-full flex flex-col items-center lg:items-start justify-center space-y-6">
    <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-cyan-300 tracking-wide drop-shadow-[0_4px_10px_rgba(0,255,255,0.6)]">
      Hi, I’m Prashant
    </h1>

 <SplitText
      text="Frontend Magician ✨ | Full-Stack Java Developer 💻. I build animated websites that are fast, responsive, and unforgettable."
      className="text-base sm:text-xl md:text-2xl text-white font-medium max-w-xl leading-snug"
      delay={50}
      duration={0.9}
      ease="power3.out"
      splitType="words"
      from={{ opacity: 0, y: 40 }}
      to={{ opacity: 1, y: 0 }}
      threshold={0.1}
      rootMargin="-100px"
      onLetterAnimationComplete={handleAnimationComplete}
    />

          <RotatingText
            texts={[
              'HTML',
              'CSS',
              'JavaScript',
              'Tailwind',
              'Bootstrap',
              'React',
              'Angular',
              'Java',
              'Spring Boot',
              'MongoDB',
              'SQL',
            ]}
            mainClassName=" sm:ml-25  lg:ml-50  px-4 py-2 bg-cyan-400 text-black font-semibold rounded-md shadow-md text-center"
            staggerFrom="last"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-120%" }}
            staggerDuration={0.050}
            splitLevelClassName="overflow-hidden pb-1 w-auto text-center text-2xl sm:text-3xl lg:text-4xl font-bold"
            transition={{ type: "spring", damping: 30, stiffness: 800 }}
            rotationInterval={2000}
          />
        </div>

        {/* Image Section */}
     {/* <div className="lg:w-1/2 w-full h-full items-center justify-center hidden lg:flex">
  <img
    src={""}
    alt="Prashant"
    className="w-[300px] sm:w-[400px] h-auto object-contain drop-shadow-2xl rounded-xl border-2 border-cyan-300 bg-transparent"
  />

  <div>

  </div>
</div> */}
      </div>
    </div>
  );
};

export default Intro;
