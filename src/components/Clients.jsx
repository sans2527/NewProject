import React, { forwardRef } from 'react'
import './style/Clients.css'
import A1 from '../images/A1.png'
import A2 from '../images/A2.png'
import A3 from '../images/A3.png'
import A4 from '../images/A4.png'
import A5 from '../images/A5.png'
import A6 from '../images/A6.png'
import A7 from '../images/A7.png'
import A8 from '../images/A8.png'

import A9 from '../images/A9.png'
import A10 from '../images/A10.png'
import A11 from '../images/A11.png'
import A12 from '../images/A12.png'
import A13 from '../images/A13.png'
import A14 from '../images/A14.png'
import A15 from '../images/A15.png'
import A16 from '../images/A16.png'
import A17 from '../images/A17.png'
import A18 from '../images/A18.png'
import Log from '../images/Log.png'
import Emoji from '../images/Emoji.png'
import Marquee from "react-fast-marquee";


const Clients = forwardRef((props, ref) => {

    const imgComp = [A1, A2, A3, A4, A5, A6, A7, A8, A9, A10, A11, A12, A13, A14, A15, A16, A17, A18]
    return (
        <>
            <div ref={ref} >
                <div className="main">
                    <div style={{ display: 'flex', flexDirection: 'column', width: '40%' }}>
                        <h1 style={{ color: 'black' }}>HAPPY CLIENTS<span style={{ color: '#E23A7D' }}>.</span></h1>
                        <p>We've been engaged in a variety of projects lately, designing Mobile Apps, Websites, Dashboards and
                            developing digital experiences. All our recent work
                            reflects our commitment to helping clients achieve
                            their goals.</p>



                    </div>

                    <div>

                        <img src={Emoji} style={{ height: "150px", width: '150px' }} />
                    </div>
                </div>

                <Marquee>

                    {
                        imgComp.map((item, index) => {
                            return <div style={{ margin: ' 0 3vw' }}>
                                <img src={item} style={{ height: "250px", width: '150px', objectFit: 'contain', }} key={index} />
                            </div>

                        })
                    }
                </Marquee>








            </div>
            <div className='const'></div>
        </>
    )
})
export default Clients
