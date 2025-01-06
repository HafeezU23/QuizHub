import Navbar from "./components/header/Navbar"
import HeroSection from "./components/hero_section/HeroSection"
import MainSection from "./components/main_section/MainSection"
import Footer from "./components/Footer/Footer"
import { Route, Routes } from "react-router-dom"
import Contact from "./pages/Contact"
import Guidlines from "./pages/Guidlines"
import Redirect from "./pages/Redirect"
import Quiz from "./pages/Quiz"
import Home from "./pages/Home"
import { useRef } from "react"




function App() {
     
 
    
  return (
    <>
    
    <Navbar/>
        <Routes>
          
          <Route path="/" element={<Home/>}></Route>
          <Route path="/Contact" element={<Contact/>}></Route>
          <Route path="/Guidlines" element={<Guidlines/>}></Route>
          <Route path="/Redirect" element={<Redirect/>}></Route>
          <Route path="/Quiz" element={<Quiz />} />
          </Routes>
     
     <Footer/>

    </>
  )
}

export default App
