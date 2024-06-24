import React from 'react'
import './Graphs.css'
import Logo from '../../images/Logo.png'
import Brouchers from '../../images/Brouchers.png'
import Phone from '../../images/Phone.png'
import Company from '../../images/Company.png'
import  Portfolio from '../../images/Portfolio.png'
import  Party from '../../images/Party.png'
import  Sale from '../../images/Sale.png'
import  Rollup from '../../images/Rollup.png'
import  Pott from '../../images/Pott.png'
import { useNavigate } from 'react-router-dom'

const Graphs = () => {
    const nav= useNavigate();
    return (
        <>

            <div className='head'>
                <h1 style={{ color: 'black' }}>GRAPHIC PROJECTS<span style={{ color: '#F3772F' }}>.</span></h1>
                <p>We've been engaged in a variety of projects lately, designing Mobile Apps, Websites, Dashboards and
                    developing digital experiences. All our recent work
                    reflects our commitment to helping clients achieve
                    their goals.</p>
            </div>
            <div className='graphicproject'>
                <div className='log'>
                    < img src={Logo} style={{ height: 'auto', width: '100%', objectFit: 'contain', borderRadius: "10%" }}   onClick={()=>nav("/LOGO")} />
                    <p style={{ marginLeft: '6%' }}>LOGOS</p>
                </div>
                <div className='log'> 
                    < img src={Brouchers} style={{ height: 'auto', width: '100%', objectFit: 'contain', borderRadius: "10%" }} />
                    <p style={{ marginLeft: '6%' }}>FLYERS/BROCHURES</p>
                </div>
                <div className='log'> 
                    < img src={Phone} style={{ height: 'auto', width: '100%', objectFit: 'contain', borderRadius: "10%" }} />
                    <p  style={{ marginLeft: '6%' }}>SOCIAL MEDIA POSTS</p>
                </div>
            </div>


            <div className='graphicprojects'>
                <div className='log'>
                    < img src={Company} style={{ height: 'auto', width: '100%', objectFit: 'contain', borderRadius: "10%" }} />
                    <p style={{ marginLeft: '6%' }}>VISITING CARDS</p>
                </div>
                <div className='log'> 
                    < img src={Portfolio} style={{ height: 'auto', width: '100%', objectFit: 'contain', borderRadius: "10%" }} />
                    <p style={{ marginLeft: '6%' }}>CO. PORTFOLIOS</p>
                </div>
                <div className='log'> 
                    < img src={Party} style={{ height: 'auto', width: '100%', objectFit: 'contain', borderRadius: "10%" }} />
                    <p style={{ marginLeft: '6%' }}>THUMBNAILS</p>
                </div>
            </div>



            <div className='graphicprojects'>
                <div className='log'>
                    < img src={Sale} style={{ height: 'auto', width: '100%', objectFit: 'contain', borderRadius: "10%" }} />
                    <p style={{ marginLeft: '6%' }}>BANNERS</p>
                </div>
                <div className='log'> 
                    < img src={Rollup} style={{ height: 'auto', width: '100%', objectFit: 'contain', borderRadius: "10%" }} />
                    <p style={{ marginLeft: '6%' }}>STANDEES</p>
                </div>
                <div className='log'> 
                    < img src={Pott} style={{ height: 'auto', width: '100%', objectFit: 'contain', borderRadius: "10%" }} />
                    <p style={{ marginLeft: '6%' }}>PACKAGING DESIGN</p>
                </div>
            </div>
            <div className='end2'></div>


        </>
    )
}
export default Graphs
