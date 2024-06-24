import React from 'react'
import Logo from '../../images/Logo.png'
import './Logo.css'
const Logos = () => {
  return (
    <div className='introduction'>
        <h1>LOGOS</h1>
        <img src={Logo} style={{width:"400px"}}/>
    </div>
  )
}

export default Logos