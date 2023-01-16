import React,{useState,useEffect ,useRef} from 'react'
import { Link,NavLink } from "react-router-dom";
import './style.css'
import {FaAlignJustify,FaTimes}  from 'react-icons/fa';
import Profil from '../Profil_page/Profil';


export  function Header() {

let [res,setres]=useState(false)
let toggle=()=>setres(!res)
let home=()=>setres(false)
let ref=useRef()


useEffect(()=>{

  let close=(e)=>{
   if(ref.current && !ref.current.contains(e.target)){
      setres(false)
    }
  }
  document.addEventListener('mousedown',close)
  return ()=>{
  document.removeEventListener('mousedown',close)
  }
},[ref])



const active = ({ isActive }) => {
  return  isActive ? "active" : "not_active";
}

  return (
    <div >
     
          <header>
          <NavLink  className='logo' onClick={home}  to='/' style={{ textDecoration:'none'}}>     
                <h1>DHRUVA</h1>
                <p>ASTRONOMY CLUB</p>  
            </NavLink >
            <hr/>
            <p className='respons' onClick={toggle}>{res===true ?< FaTimes className='x'/>:<FaAlignJustify/>}</p>
            <hr/>
            <nav className={`btn1 ${res===true?'resp':'btn5'}`}  >
               <ul  ref={ref}>
               
               <NavLink exact to='/Discover' onClick={toggle}  className={active}><li>Discover</li></NavLink > 
               <hr/>
               <NavLink exact to='/quiz' onClick={toggle}  className={active}><li>Quiz</li></NavLink > 
               <hr/>
                <NavLink exact to='/about' onClick={toggle} className={active}><li>About</li></NavLink >
                <hr/>
                <NavLink exact to='/sign' onClick={toggle} className={active}><li >Sign up</li></NavLink >
             
             
          
               </ul>
           
               <hr/>
               
            </nav>
{<Profil/>}
         </header>   
         </div>
  )
}
