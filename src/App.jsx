import React, { useRef } from 'react'
import Heading from './components/Heading'

import Content from './components/NewContent'
import Maskgroup from './components/Maskgroup'
import './App.css'
import Apps from './components/Apps'
import Graphic from './components/Graphic'
import Clients from './components/Clients'
// import Feedback from './components/Feeback'
import Work from './components/Work'
import Footer from './components/Footer'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home'
import AllProjects from './components/AllProjects/AllProjects'
import Weapp from './components/AllProjects/Weapp'
import Graphs from './components/AllProjects/Graphs'
import Logo from './components/AllProjects/Logos'


const App = () => {
  const graphics = useRef(null);
  const clients = useRef(null);
  const apps = useRef(null);
 return (

  <BrowserRouter>
        <Heading graphicsRef={graphics} clientsRef={clients}  appsRef={apps}/>

  <Routes>
    <Route path="/" element={<Home graphicsRef={graphics} clientsRef={clients}  appsRef={apps} />}/>
    <Route path="projects" element={<AllProjects/>} />
    <Route path="/W.E." element={<Weapp/>} />
    <Route path="/Graphics" element={<Graphs/>} />
    <Route path="/LOGO" element={<Logo/>} />



  </Routes>
  <Footer />

</BrowserRouter>



  )
}



export default App