import React from 'react'

const Navigation=() => {
return(
    <nav>
    <div classname="logo">
        <img src="https://m.media-amazon.com/images/I/51Iy5h5rqgL.jpg" alt="logo" style={{width : '40px' , height:'40px' , objectFit:'cover'}}/>
    </div>
    <ul>
        <li href="#">MENU</li>
        <li href="#">LOCATION</li>
        <li href="#">ABOUT</li>
        <li href="#">CONTACT</li>
     </ul> 
     <button>LOGIN</button> 
</nav>

)



}

export default Navigation;