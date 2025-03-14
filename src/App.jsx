import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import NavBar from './components/NavBar'
import HeroSection from './components/HeroSection'
import Footer from './components/Footer'
import ArticleSection from './components/ArticleSection'

// import './App.css'
function App() {
  return (
    <>
    <NavBar/>
    {/* <div className='flex flex-col items-center '> */}
    <HeroSection/>
    <ArticleSection/>
    {/* </div> */}
    <Footer/>
    </>
  )
}

export default App
