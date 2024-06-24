import React from 'react'
import './style/Work.css'
import Ab from '../images/Ab.png'
import Ac from '../images/Ac.png'
import Ad from '../images/Ad.png'
import Ae from '../images/Ae.png'
import Af from '../images/Af.png'
import Ag from '../images/Ag.png'
const Work = () => {
    return (
        <>

            <div className='head'>
                <h1> WE GOT YOUR BACK<span style={{ color: '#F3772F' }}>.</span></h1>
            </div>
            <div className='mn'>
                <div className='form' style={{ borderLeft: '5px solid #F3772F' }}>
                    <img src={Ab} style={{ height: '50px', width: '50px' }} />
                    <h3>One Team</h3>
                    <p>Our clients become part of our team, and we become a part of theirs.</p>


                </div>
                <div className='form' style={{ borderTop: '5px solid #7D399E' }}>
                    <img src={Ac} style={{ height: '50px', width: '50px' }} />
                    <h3>Honesty & Openness</h3>
                    <p> Upfront honesty and open communication is the only way we’ll work.</p>


                </div>
                <div className='form' style={{ borderRight: '5px solid #E23A7D' }}>
                    <img src={Ad} style={{ height: '50px', width: '50px' }} />
                    <h3>Element of Delight</h3>
                    <p>Every project is our next chance to do better, we sometimes even delight ourselves.</p>

                </div>

                <div className='form' style={{ borderLeft: '5px solid #E23A7D' }}>
                    <img src={Ae} style={{ height: '50px', width: '50px' }} />
                    <h3>Be Kind</h3>
                    <p>We’re all in this together, trying to make better. Being kind does not cost anything.</p>



                </div>
                <div className='form'  style={{ borderBottom:'5px solid #7D399E'}}>
                    <img src={Af} style={{ height: '50px', width: '50px' }} />
                    <h3>We Got Your Back</h3>
                    <p> Being part of your team gives us ownership and accountability, letting you down means we let us down..</p>
                </div>

                <div className='form' style={{ borderRight: '5px solid #F3772F' }}>
                    <img src={Ag} style={{ height: '50px', width: '50px' }} />
                    <h3>Creative Core</h3>
                    <p>Digital design is both an art and a science, founded in creativity. We love creativity, it’s our happy place.</p>
                </div>

            </div>

            <div className='sep'></div>
        </>
    )
}
export default Work