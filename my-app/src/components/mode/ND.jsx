import React from 'react'
import './ND.scss'
import {FcPortraitMode} from 'react-icons/fc'
import {FcNightPortrait} from 'react-icons/fc'
import {useState} from 'react'
const ND = ({mode ,setMode}) => {
   
  return (      
        <div className='navc'> 
        <span  onClick={()=>setMode(()=>(mode.id ==="day"?{id :"night",
        icon:<FcNightPortrait/>} :{id :"day",
        icon:<FcPortraitMode/>}))}>
        {mode.icon}
        </span>
        </div> );
    }
 export default ND;
