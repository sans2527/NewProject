import React, { useState } from 'react'
import Graphketing from "../images/Graphketing.png"
import { FaCaretDown } from "react-icons/fa";
import SubhaederTab from './Header/SubhaederTab';
import './style/Heading.css'

const Heading = ({ graphicsRef , clientsRef, appsRef} ) => {
    // const Heading =({clientsRef}) => {
    const [ activeTab  , setActiveTab] = useState('Home')
    return (
        <div className='Navbar'>
            <div className='logo'>
                <img src={Graphketing} style={{ height: '3000px', width: '200px', objectFit: 'contain' }} />
            </div>
            <div className="Project">
                <div className='content'>
                <SubhaederTab value={"Home"} dropDown={false} activeTab={activeTab} setActiveTab={setActiveTab}/>
                {/* <SubhaederTab value={"About Us"} dropDown={false} activeTab={activeTab} setActiveTab={setActiveTab}/> */}
                <SubhaederTab hanleRef={appsRef} value={"UI Design & Development"} drclopDown={true} activeTab={activeTab} setActiveTab={setActiveTab}/>
                {/* <SubhaederTab value={"Development"} dropDown={true} activeTab={activeTab} setActiveTab={setActiveTab}/> */}
                <SubhaederTab hanleRef={graphicsRef} value={"Graphics"} dropDown={true} activeTab={activeTab} setActiveTab={setActiveTab}/>
                <SubhaederTab   hanleRef={clientsRef} value={" Happy Clients"} dropDown={false} activeTab={activeTab} setActiveTab={setActiveTab}/>

                     {/* <span className='butn' onClick={() => { console.log('CLICK') }}>Apps</span> */}
                    {/* <span className='line'></span>  */}

                    </div>
            <div style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
                <div className='btn'>Contact us</div>
            </div>
        </div>
        </div>
    )
}
// }

export default Heading