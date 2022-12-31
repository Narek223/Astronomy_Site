import React from 'react';
import './fin.css';
import im from "../../img/SpaceXDragon.png";
import { questions } from './quiz';
import {Page} from './Page';
import {FaRedoAlt} from  'react-icons/fa';
export   function Final({data,c,b}) {
let reload=()=>{
  document.location.reload()
}
  return ( 
    <div className='con'>
    <div className='pro'> 
     
<h1>THANK YOU !  </h1>
<p> FOR PARTICIPATING </p>
<p>your score is {`${data}/${questions.length}`}</p>
<img className='im' src={im}/>
<button className='play' onClick={reload}>Play again< FaRedoAlt  className='res'  /></button>
</div>
    </div>
  )
}
