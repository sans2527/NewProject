import React, { useRef } from 'react'
import Heading from './Heading'
import Content from './NewContent'
import Maskgroup from './Maskgroup'
import Apps from './Apps'
import Graphic from './Graphic'
import Clients from './Clients'
import Work from './Work'
import Footer from './Footer'

const Home = ({ graphicsRef , clientsRef, appsRef}) => {

  return (
    <div style={{}}>


      <Content/>
      <Maskgroup />
      < Apps  ref={appsRef} />
      <Graphic ref={graphicsRef}  />
      <Clients  ref={clientsRef}/>
      {/* <Feedback /> */}
      <Work />

    </div>
  )
}

export default Home