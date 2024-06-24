import React, { useState, useEffect } from "react";
import Design from "../images/Design.png"
import Develop from '../images/Develop.png'
import Deploy from '../images/Deploy.png'
import './style/Content.css'


const Content = () => {
    const [selected, setSelected] = useState(0)
    const [count , setCount] = useState(0)
    // console.log("count=========" , selected)


    useEffect(() =>{
        const interval = setInterval(() => {
            setSelected( (prev) =>  prev >= 2 ? 0 : prev+1)
        }, 10000);
    } , [])

    console.log( " sel;ecyed" , selected)
 
        return (
            <div className="Container">
                <div className="Content">
                    <p onClick={() => setSelected(0)}> DESIGN<span style={{ color: '#F3772F' }}>.</span>
                    </p>
                    <p onClick={() => setSelected(1)}> DEVELOP<span style={{ color: '#7D399E' }}>.</span>
                    </p>

                    <p onClick={() => setSelected(2)}> DEPLOY<span style={{ color: '#E23A7D' }}>.</span></p>
                </div>
                <div className="imageComp">
                    <img src={selected == 0 ? Design : selected == 1 ? Develop : Deploy} style={{ height: '400px', width: '400px', objectFit: 'contain' }} />
                </div>




            </div>
        )
    }

export default Content