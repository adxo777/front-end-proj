import React from 'react'
import './Nav.scss'
import {AiTwotoneHome} from 'react-icons/ai'
import {FaUserAlt} from 'react-icons/fa'
import {MdMedicalServices} from 'react-icons/md'

import {useState} from 'react'
const Nav = () => {
    const[activeNave,setActiveNav]=useState('#intro')
    return (      
        <nav> 
        <a href="#intro" onClick={()=>setActiveNav('#intro')} className={activeNave ==='#intro'?' active':''}><AiTwotoneHome/> </a>
        <a href="#portfolio" onClick={()=>setActiveNav("#portfolio")} className={activeNave==="#portfolio"?' active':''} ><MdMedicalServices/> </a>
        <a href="#testimonials" onClick={()=>setActiveNav("#testimonials")} className={activeNave==="#testimonials"?'active':''} ><FaUserAlt/> </a>
       
        
        </nav> );
}
 
export default Nav;
