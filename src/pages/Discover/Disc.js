import React,{useState,useEffect} from 'react';
import './disc.css';
import { rrespons } from './respons';
import stars_2 from '../../img/photo-1464850598256-dac80286d6ca.jpg';
import {FaArrowLeft,FaArrowRight}  from 'react-icons/fa'

export  function Disc() {
let [sl,setsl]=useState(0)

let next=()=>{
  setsl(sl==rrespons.length-1?0: sl+1)
 
}
let prev=()=>{
  setsl(sl===0?rrespons.length-1: sl-1)
}

  return (
    <div className='conteiner_two'>
 <img src={stars_2} className='stars'/>
<div>
<button className='button_one'  onClick={prev}><FaArrowLeft/></button>
 <button className='button_two' onClick={next}><FaArrowRight/></button>
  <div className='mek'>
    <a href={rrespons[sl].href} className='hr'>{rrespons[sl].h1}</a>
  <img src={rrespons[sl].img}/>
<p>{rrespons[sl].p}</p>
  </div>
</div>
    </div>
  )
}