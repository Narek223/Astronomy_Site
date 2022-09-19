import React,{useState} from 'react'
import moon from '../../img/Custom Background - 1.png'
import { Link } from "react-router-dom";
import './style.css'
import {Header} from '../header/Header'


export  function Home () {
 let array=['Space','Stars','Planets','Galaxies','Life']
 const [state,setstate]=useState(array)
 const [count,setcount]=useState(0)

const key=()=>{
setcount(count===state.length-1?0:count+1)
};
  return (
<div className='conteiner'>
<img src={moon} className='im1'/>
 <Header/>
     <section className='one'>
      <h1>Learn</h1>
      <ul onClick={key} >
        <li>{state[count]}</li>
        <li>{state[count]}</li>
        <li>{state[count]}</li>
        <li>{state[count]}</li>
        <li>{state[count]}</li>
      </ul>
      <h1>and Cosmos</h1>  
      </section> 
    
    </div>
       
  )
}
