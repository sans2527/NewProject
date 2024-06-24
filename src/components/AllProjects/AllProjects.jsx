import React from 'react'
import './Project.css'
import We from '../../images/We.png'
import Leaf from '../../images/Leaf.png'
import Strike from '../../images/Strike.png'
import Strike2 from '../../images/Strike2.png'
import Frienxe from '../../images/Frienxe.png'
import Care from '../../images/Care.png'
import Feelit from '../../images/Feelit.png'
import Rent from '../../images/Rent.png'
import RPIPL from '../../images/RPIPL.png'
import Feel4 from '../../images/Feel4.png'
import  MGCo from '../../images/MGCo.png'
import  Tommy from '../../images/Tommy.png'
import Trikes from '../../images/Trikes.jpeg'
import { useNavigate } from 'react-router-dom'

const AllProjects = () => {
    const nav= useNavigate();
  return (
    <>
    <div className='pjct '  >
    <h1 style={{ color: 'black' }}>APP PROJECTS<span style={{ color: 'orange' }}>.</span></h1>
    <p>We've been engaged in a variety of projects lately, designing Mobile Apps, Websites, Dashboards and
        developing digital experiences. All our recent work
        reflects our commitment to helping clients achieve
        their goals.</p>

</div>
  <div className='pct'>
  <div className="">
      <img src={We} style={{ height: '400px', width: '350px', objectFit: 'contain' }}   onClick={()=>nav("/W.E.")}/>
      <h2>W.E. APP</h2>

  </div>
  <div className="">
      < img src={Leaf} style={{ height: '400px', width: '350px', objectFit: 'contain' }} />

      <h2>TARURAKSHAK APP</h2>
  </div>
  <div className="">
      < img src={Strike} style={{ height: '400px', width: '350px', objectFit: 'contain' }} />

      <h2>STRIKE APP</h2>

  </div>
</div>

<div className='ig'>
                
                <div className='' >
                    <img src={Frienxe} style={{ height: '400px', width: '350px', objectFit: 'contain' }} />
                    <h2>FRIENXE APP</h2>
                </div>
                <div className=''>

                    <img src={Care} style={{ height: '400px', width: '350px', objectFit: 'contain' }} />
                    <h2>CARE EASY APP</h2>
                </div>
                <div className=''>
                    <img src={Feel4} style={{ height: '400px', width: '350px', objectFit: 'contain' }} />
                    <h2>FEEL IT APP</h2>
                </div>



            </div>
            <div className='render'>
                
                <div className='' >
                    <img src={Rent} style={{ height: '400px', width: '350px', objectFit: 'contain' }} />
                    <h2>RENT ASSISTENZ APP</h2>
                </div>
                </div>

                <div className='divider'></div>

                <div className='webprojects '  >
    <h1 style={{ color: 'black' }}>WEB PROJECTS<span style={{ color: '#7D399E' }}>.</span></h1>
    <p>We've been engaged in a variety of projects lately, designing Mobile Apps, Websites, Dashboards and
        developing digital experiences. All our recent work
        reflects our commitment to helping clients achieve
        their goals.</p>

</div>
<div className='point'>
  <div className=""  >
      <img src={Trikes} style={{ width: '350px' }} />
      <h2>TRIKES DASHBOARD</h2>


  </div>
  <div className="">
      < img src={RPIPL} style={{  width: '350px', objectFit: 'contain' }} />
       <h2>FRIENXE DASHBOARD</h2>

  </div>
  <div className="">
      < img src={RPIPL} style={{  width: '350px', objectFit: 'contain' }} />
      <h2>RPIPL SOFTWARE</h2>

  </div>
</div>

<div className='point'>
  <div className=""  >
      <img src={Feelit} style={{ width: '350px' }} />
      <h2>FEEL IT DASHBOARD</h2>


  </div>
  <div className="">
      < img src={MGCo} style={{  width: '350px', objectFit: 'contain' }} />
       <h2>MGCo LEGAL SOFTWARE</h2>

  </div>
  <div className="">
      < img src={RPIPL} style={{  width: '350px', objectFit: 'contain' }} />
      <h2>SHIPER SOFTWARE</h2>

  </div>
</div>

<div className='point'>
    <div>
    <img src={Tommy}  style={{width:"350px", objectFit:'contain'}}/>
    <h2>TOMMY CASA WEB</h2>
    </div>

</div>
<div className='lin'></div>




            

</>

  )
}

export default AllProjects