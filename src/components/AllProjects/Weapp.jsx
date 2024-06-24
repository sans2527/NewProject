import React from 'react'
import "./App.css"
import Icwe from '../../images/Icwe.png'
import App from '../../images/App.png'
import App1 from '../../images/App1.png'
import App2 from '../../images/App2.png'
import App3 from '../../images/App3.png'
import App4 from '../../images/App4.png'
import Environment from '../../images/Environment.png'
import { MdArrowOutward } from "react-icons/md";
// const Weapp = () => {
const Weapp = () => {
  return (
    <>
      <div>
        <img src={Icwe} style={{ width: '85%', margin: '3% 7%' }} />
      </div>

      <div className='contain'>
        <h2>W.E. APP</h2>

        <p>We've been engaged in a variety of projects lately, designing Mobile Apps, Websites, Dashboards and
          developing digital experiences. All our recent work reflects our commitment to helping clients achieve
          their goals.</p>
      </div>

      <div className='con'> <h4> INDUSTRY</h4> </div>
      <div className='tain'> <p>Professional Services</p></div>

      <div className='photos'>
        <div className='column1'>
          <div> <img src={App} style={{ height: '350px' }} /> </div>
          <div> <img src={App2} style={{ height: '715px' }} /> </div>
        </div>


        <div className='column2'>
          <div> <img src={App} style={{ height: '350px' }} /> </div>
          <div> <img src={App3} style={{ height: '350px' }} /> </div>
          <div> <img src={App4} style={{ height: '350px' }} /> </div>
        </div>

        <div className='column3'>
          <div> <img src={App1} style={{ height: '715px' }} /> </div>
          <div> <img src={App} style={{ height: '350px' }} /> </div>


        </div>

      </div>
      <div className="seprators"></div>

      <div className='webpage'>
        <div className='web'>
          <p>NEXT</p>
          <h2>TARURAKSHAK APP</h2>
          <p>We've been engaged in a variety of projects lately, designing Mobile Apps, Websites, Dashboards and
            developing digital experiences. All our recent work reflects our commitment to helping clients achieve
            their goals.</p>
          <div style={{ }}>
            <p style={{ color: '#28A5DA', fontFamily: "Kodchasan" , display  :'inline-block' , marginRight : '10px'}}><u>View project</u></p>
            <MdArrowOutward/>
          </div>

        </div>
        <div className='page'>
          <img src={Environment} style={{ width: '100%' }} />

        </div>
       </div>
        <div className='divide'></div>



      
    </>
  )
}


export default Weapp