import React, { forwardRef } from 'react'
import "./style/NewWeb.css"
import We from "../images/We.png"
import Strike from '../images/Strike.png'
import Strike2 from '../images/Strike2.png'
import Leaf from '../images/Leaf.png'
import Frienxe  from '../images/Frienxe.png'
import Care from '../images/Care.png'
import { useNavigate } from 'react-router-dom'
// import {link}  from "react-router-dom";
const Apps = forwardRef((props, ref) => {
    const nav= useNavigate();
    return (
        <>
            <div className="seperator"></div>

            <div ref={ref} style={{ position: 'relative', display: 'flex', width: '85%', margin: '0 auto' }}>
                <div className='para'>
                    <h1 style={{ color: 'black' }}>APP & WEB PROJECTS<span style={{ color: 'orange' }}>.</span></h1>
                    <p>We've been engaged in a variety of projects lately, designing Mobile Apps, Websites, Dashboards and
                        developing digital experiences. All our recent work
                        reflects our commitment to helping clients achieve
                        their goals.</p>

                </div>

                <p1 style={{ position: 'absolute', right: '  19px', bottom: '10px',color: '#28A5DA',fontFamily: "Kodchasan"}} onClick={()=>nav("/projects")} ><u >
                    {/* <link to="/apps"> */}
                    View All
                    {/* </link> */} 
                    </u>
                    </p1>

            </div>
            <div className='pic'>
                <div className="">
                    <img src={We} style={{ height: '400px', width: '350px', objectFit: 'contain' }} />
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



            <div className='img'>
                <div className=''>
                    <img src={Strike2} style={{ height: '400px', width: '350px', objectFit: 'contain' }} />
                    <h2>STRIKE DASHBOARD</h2>
                </div>
                <div className='' >
                    <img src={Frienxe} style={{ height: '400px', width: '350px', objectFit: 'contain' }} />
                    <h2>FRIENXE APP</h2>
                </div>
                <div className=''>

                    <img src={Care} style={{ height: '400px', width: '350px', objectFit: 'contain' }} />
                    <h2>CARE EASY APP</h2>
                </div>



            </div>



       
            <div className="sep"></div>
               
           

        </>


    )
})
export default Apps