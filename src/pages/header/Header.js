import React,{useState,useEffect ,useRef} from 'react'
import { Link } from "react-router-dom";
import './style.css'
import {FaAlignJustify, FaLaptopHouse,FaTimes}  from 'react-icons/fa';



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

 

  return (
    <div >
          <header>
          <Link className='logo' onClick={home}  to='/' style={{ textDecoration:'none'}}>     
                <h1>DHRUVA</h1>
                <p>ASTRONOMY CLUB</p>  
            </Link>
            <hr/>
            <p className='respons' onClick={toggle}>{res===true ?< FaTimes className='x'/>:<FaAlignJustify/>}</p>
            <hr/>
            <nav className={`btn1 ${res===true?'resp':'btn5'}`}  >
               <ul  ref={ref}>
               
               <Link to='/Discover' onClick={toggle}  style={{color:'white',textDecoration:'none'  }}><li>Discover</li></Link> 
               <hr/>
               <Link to='/quiz' onClick={toggle} style={{color:'white',textDecoration:'none'  }}><li>Quiz</li></Link> 
               <hr/>
                <Link to='/about' onClick={toggle} style={{color:'white',textDecoration:'none'  }}  ><li>About</li></Link>
                <hr/>
                <Link to='/sign' onClick={toggle}  style={{ color:'white',textDecoration:'none'  }}><li >Sign up</li></Link>
             
               </ul>
               <hr/>
            </nav>
         </header>   
         </div>
  )
}
