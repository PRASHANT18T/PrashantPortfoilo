import React from 'react'
import Intro from './Intro'
import ProjectCards from './ProjectCards'
import AboutCard from './AboutCard' 
import Skills from './Skills'
import Services from './Services'
import ContactForm from './ContactForm'

const Home = () => {
  return (
   <>
   
   <Intro />
   <ProjectCards />
   <AboutCard />
   <Skills />
   <Services />
   <ContactForm />
   </>
  )
}

export default Home