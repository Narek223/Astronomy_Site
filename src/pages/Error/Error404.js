import React from 'react';
import error from '../../img/6329883.jpg';
import { NavLink } from "react-router-dom";
import './error.css'



export  function Error404() {
  return (
    <div className='error_page'>
        
        <img  className='err'  src={error}/>
        <NavLink   to='/' style={{ textDecoration:'none'}}>     
           <button className='home'>GO HOME</button>
            </NavLink >
        
    </div>
  )
}
