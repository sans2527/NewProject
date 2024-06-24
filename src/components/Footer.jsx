import React from 'react'
import Line from '../images/Line.png'
import './style/Footer.css'
import Mess from '../images/Mess.png'
import Map from '../images/Map.png'
import Location from '../images/Location.png'
import { FaLinkedin } from "react-icons/fa";
import { BsFacebook } from "react-icons/bs";
import { PiInstagramLogoFill } from "react-icons/pi";
const Footer = () => {
    return (
        <>
            <div className='main2'>
                <div className='end'>
                    <h1 style={{ textAlign : 'center', fontSize:'50px'}}>WANT TO GROW? LET’S GET IN TOUCH.</h1>
                </div>
                <div className="" style={{ display: 'flex', flexDirection: 'row', width: '100%' , alignItems:'start' }}>
                    <div >
                        <img src={Line} style={{
                            //  height: '400px',
                             width: '400px', objectFit: 'contain' ,  }} />

                    </div>
                    <div style={{display:'flex',flexDirection:'column'  , gap : '16px', alignItems : 'center' ,  marginTop : '4%' }}>
                        <div className='en'>
                            <p style={{ width: '25%' }}>At Graphketing, our vast arena
                                of services helps you to grow &
                                take over a seat at a table among
                                businesses that are already on
                                the rise.
                            </p>
                            <div style={{ width: '45%', }}>
                                <p style={{ alignItems: 'center', display: 'flex', flexDirection: 'row', gap: '5%' }}>

                                    <img src={Mess} style={{ height: '10px', width: '10px', }} />
                                    <p>
                                        contact@graphketing.com
                                    </p>
                                </p>
                                <p style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '5%', marginTop: '5%' }}>

                                    <img src={Map} style={{ height: '15px', width: '15px' }} />
                                    <p>

                                        B-11, First Floor, Sector 64, Noida, Uttar Pradesh, India - 201301.</p>
                                </p>
                                <p style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '5%', marginTop: '5%' }}>

                                    <img src={Location} style={{ height: '15px', width: '15px' }} />
                                    <p style={{ display: 'flex', flexDirection: 'row' }}> Find Us On :

                                    </p>
                                    <FaLinkedin />
                                    <BsFacebook />
                                    <PiInstagramLogoFill />

                                </p>
                            </div>
                        </div>
                        <div style={{ color: 'white', padding:'5%' }}>Privacy Policy  |  Terms & Conditions | Copyright © 2024 Graphketing | Powered by Graphketing

                        </div>
                    </div>
                  
                    
                </div>
                <div className='lined'/>
            
            </div>

        </>

    )

}
export default Footer