import React,{useState} from  "react"
import { FaSkullCrossbones } from 'react-icons/fa';

import "./Infobar.css"

const Infobar = ()=>{

    const [show,setShow] = useState(true);
    
    const hideBar =()=>{
        setShow(false)
    } 
    
         return(
        <div className={show===true?"info-bar":"info-bar-hide"} >
            <div >
                <span>Click <b>LOGIN</b> for LogingIn, <b>SIGNUP</b> for Register and <b>SERVICES</b> to display Offers </span>
            </div>
            <div className="cross-icons" onClick={hideBar}>
                <FaSkullCrossbones/>
            </div>
        </div>
    )
}

export default Infobar;