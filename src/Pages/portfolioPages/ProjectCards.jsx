import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';

const projects = [
  {
    id: 1,
    title: 'LaceUp – Shoe E-commerce Website',
    description: 'A full-stack e-commerce website selling branded sneakers and shoes. Users can browse, filter, and purchase shoes securely with integrated Stripe payments.',
    img: 'https://images.unsplash.com/photo-1606813909355-c81f3d8b9be3',
    tech: 'React, Tailwind CSS, Spring Boot, Stripe API, MySQL',
    liveLink: '/project1',
    repoLink: '#'
  },
  {
    id: 2,
    title: 'Fitness Tracker',
    description: 'Track workouts, calories, and analytics.',
    img: 'https://th.bing.com/th?q=Fitness+App+UI',
    tech: 'React, Redux, Tailwind, MongoDB',
    liveLink: '/project2',
    repoLink: '#'
  },
  {
    id: 3,
    title: 'E-Commerce Site',
    description: 'Online store with cart, payment & admin panel.',
    img: 'https://th.bing.com/th?q=E+Commerce+Dashboard+UI',
    tech: 'React, Tailwind CSS, Spring Boot, SQL',
    liveLink: '/project3',
    repoLink: '#'
  },
  {
    id: 4,
    title: 'Blog Platform',
    description: 'Write & publish blogs with markdown support.',
    img: 'https://th.bing.com/th?q=Blog+Website+Design',
    tech: 'React, Node.js, Express, MongoDB',
    liveLink: '/project4',
    repoLink: '#'
  }
];

const ProjectCard = ({ project, index }) => {
  const ref = useRef();
  const inView = useInView(ref, { triggerOnce: true, threshold: 0.1 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.2, ease: 'easeOut' }}
      className="rounded-xl shadow-xl border border-gray-700 dark:bg-gray-900 p-6 flex flex-col justify-between hover:scale-105 transition-transform duration-300 hover:shadow-2xl"
    >
      <div className='flex items-center justify-center mb-4'>
        <img
          src={project.img}
          alt={project.title}
          className='h-36 w-full object-cover rounded-md shadow-md'
        />
      </div>

      <h2 className='text-xl font-semibold text-white mb-2'>{project.title}</h2>
      <p className='text-zinc-300 text-sm mb-4'>{project.description}</p>

      <div className='text-sm text-zinc-400 mb-4'>
        <strong className="text-gray-100">Technologies:</strong> {project.tech}
      </div>

      <div className='flex justify-between items-center text-sm font-semibold text-blue-400'>
        <Link to={project.liveLink} className='hover:underline'>View Project</Link>
        <a href={project.repoLink} target="_blank" rel="noopener noreferrer" className='hover:underline'>GitHub Repo</a>
      </div>
    </motion.div>
  );
};

const ProjectCards = () => {
  return (
    <div className='min-h-screen bg-gradient-to-br from-zinc-950 to-gray-900 px-6 py-16'>
      <h1 className="text-4xl font-bold text-center text-white mb-12 drop-shadow-md">🚀 My Projects</h1>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10'>
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </div>
  );
};

export default ProjectCards;
