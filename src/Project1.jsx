import React from 'react'
const  Project1 = ( props) => {

  return(
    <div className='project'>
    <h1> USER  COMPONENT</h1>
    <button onClick={()=> props.data}> call data function</button>
    </div>

  )
}
export default Project1  
