import React,{useState,useEffect} from 'react';
import './disc.css';
import { rrespons } from './respons';
import stars_2 from '../../img/photo-1464850598256-dac80286d6ca.jpg';
import {FaArrowLeft,FaArrowRight}  from 'react-icons/fa'
import { useLocation} from "react-router-dom";


export  function Disc() {
let [sl,setsl]=useState(+window.sessionStorage.getItem('index')|| 0)
let loc=useLocation()

let next=()=>{
  setsl(sl==rrespons.length-1?0: sl+1)
}
let prev=()=>{
  setsl(sl===0?rrespons.length-1: sl-1)
}
useEffect(()=>{
  if(loc.pathname==='/Discover'){
    window.sessionStorage.setItem('index',JSON.stringify(sl))
  }
},[sl])

  return (
    <div className='conteiner_two'>    
 <img src={stars_2} className='stars'/>
<div className='erku'>
<button className='button_one'  onClick={prev}><FaArrowLeft/></button>
 <button className='button_two' onClick={next}><FaArrowRight/></button>
  <div className='mek'>
    <a href={rrespons[sl].href} className='hr'>{rrespons[sl].h1}</a>
  <img src={rrespons[sl].img} className='logo_two'/>
<p>{rrespons[sl].p}</p>
  </div>
</div>
    </div>
  )
}