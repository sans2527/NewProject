import React from 'react'
import Log from '../images/Log.png'
import './style/Feedback.css'


const Feedback = () => {

    return (
        <>
         < div className='hd'>
<div className='con'>
<img src={Log} style={{ height: '40px', width: '50px' }} />

</div>
<div className='cls'>
<p>Our association with graphketing got as various opportunities through the online marketing graphketing has helped us increase our customers base pan India. We genuinely recommend Graphketing.</p>

<h2>Aakarsh Nayyar</h2>
<p1>MD, Aliste Technologies</p1>

</div>
</div>


            <div className='border'>
                <div style={{ height: '14px', width: '14px', border: '1px solid #7D399E', borderRadius: '50%', backgroundColor: ' #7D399E' }}></div>
                <div style={{ height: '14px', width: '14px', border: '1px solid #D9D9D9', borderRadius: '50%', backgroundColor: ' #D9D9D9' }}></div>
                <div style={{ height: '14px', width: '14px', border: '1px solid #D9D9D9', borderRadius: '50%', backgroundColor: ' #D9D9D9' }}></div>
            </div>

            <div className='sp'></div>
        </>



    )
}

export default Feedback