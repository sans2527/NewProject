import React, { forwardRef } from 'react'
import "./style/Graphic.css"
import Advocate from '../images/Advocate.png'
import Template from '../images/Template.png'
import Mobile from '../images/Mobile.png'
import { useNavigate } from 'react-router-dom'

const Graphic = forwardRef((props, ref) => {
    const nav= useNavigate();
    return (
        <>
            <div ref={ref} style={{ position: 'relative', display: 'flex',width:'85%',margin :"0  auto" }}> 
                <div className='graph'>
                    <h1 style={{ color: 'black' }}>GRAPHIC PROJECTS<span style={{ color: '#7D399E' }}>.</span></h1>
                    <p>We've been engaged in a variety of projects lately, designing Mobile Apps, Websites, Dashboards and
                        developing digital experiences. All our recent work
                        reflects our commitment to helping clients achieve
                        their goals.</p>

                    <p style={{ position: 'absolute', right: '25px', bottom: '10px', color: '#28A5DA', fontFamily: "Kodchasan" }} onClick={()=>nav("/graphics")} ><u>View All</u></p>

                </div>
            </div>
            <div className='pho'>
                <div className='log'>
                    < img src={Advocate} style={{ height: 'auto', width: '100%', objectFit: 'contain' , borderRadius:"10%" }} />
                    <h2 style={{ marginLeft: '6%' }}>LOGOS</h2>
                </div>
                <div className='log'> < img src={Template} style={{ height: 'auto', width: '100%', objectFit: 'contain', borderRadius:"10%" }} />
                    <h2 style={{ marginLeft: '6%' }}>BROCHURES</h2>
                </div>
                <div className='log'> < img src={Mobile} style={{ height: 'auto', width: '100%', objectFit: 'contain' , borderRadius:"10%"}} />
                    <h2 style={{ marginLeft: '6%' }}>DIGITAL CREATIVES</h2>
                </div>

            </div>

            <div className="sept"></div>


        </>

    )

})
export default Graphic
