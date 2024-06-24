import React from 'react'
import { FaCaretDown } from 'react-icons/fa'
import '../style/Heading.css'

const SubhaederTab = ({value,dropDown , setActiveTab , activeTab , hanleRef}) => {

  console.log("value =====" , value   , 'active' , activeTab)


   const HandleTabClick = () => {
        // alert(value)
        setActiveTab(value)
        hanleRef.current.scrollIntoView({ behavior:"smooth"});

    }
  return (
  <>
    <div className={`tabIcon ${value== activeTab ? 'btn' :''}`}>
    {/* <div className='tabIcon'> */}


    <span onClick={HandleTabClick}>{value}</span>
    <span>
    {
        dropDown === true ?  <FaCaretDown/> :""
    }
    </span>
   
    </div>
     <span className='line'></span>
  </>
  
  )
}

export default SubhaederTab