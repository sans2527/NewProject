import './style/Maskgroup.css'
import Meta from '../images/Meta.png'
import DragImage1 from '../images/DragImage1.png'
import Discover from '../images/Discover.png'
import Abstract from '../images/Abstract.png'
import Coffee from '../images/Coffee.png'
import Shoes from '../images/Shoes.png'
import Music from '../images/Music.png'
import Medic from '../images/Medic.png'
import Marquee from "react-fast-marquee";
const Maskgroup =() => {
    return(
        < >   
        <Marquee style={{margin : '2% 0'}}> 

             <img src={Meta} style={{height:'300px', width:'450px' ,objectFit:'contain' }}/>
             <img src={DragImage1} style={{height:'300px', width:'450px' ,objectFit:'contain'}}/>
            <img src={Discover} style={{height:'300px', width:'450px' ,objectFit:'contain'}}/>
            <img src={Abstract} style={{height: '300px', width:'450px',objectFit:'contain' }} />

        </Marquee>
           

        
       <Marquee direction='right'>
        <img src={Coffee} style={{height:'300px', width:'450px' ,objectFit:'contain' }}/>
        <img src={Shoes} style={{height:'300px', width:'450px' ,objectFit:'contain' }}/>
        <img src={Music} style={{height:'300px', width:'450px' ,objectFit:'contain' }}/>
        <img src={Medic} style={{height:'300px', width:'450px' ,objectFit:'contain' }}/>
        </Marquee>
            


       
        </>
    )
}

export default Maskgroup;
