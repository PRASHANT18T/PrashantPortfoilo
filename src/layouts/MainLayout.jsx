import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Components/portfolioComponents/Navbar'
import Footer from '../Components/portfolioComponents/Footer'

const MainLayout = () => {
  return (
    <>
    <Navbar />
    < Outlet />
    <Footer />
    </>
  )
}

export default MainLayout