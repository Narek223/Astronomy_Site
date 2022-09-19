import React,{useState} from 'react'
import { Link } from "react-router-dom";
import './style.css'

export  function Header() {
  const [state,setstate]=useState(true)
  return (
    <div >
          <header>
          <Link className='logo' to='/' style={{ textDecoration:'none'}}>     
                <h1>DHRUVA</h1>
                <p>ASTRONOMY CLUB</p>  
            </Link>
            <nav className='btn1'>
               <ul >
               <Link to='/Discover' style={{color:'white',textDecoration:'none'  }}><li>Discover</li></Link> 
               <Link to='/quiz' style={{color:'white',textDecoration:'none'  }}><li>Quiz</li></Link> 
                <Link to='/about' style={{color:'white',textDecoration:'none'  }}  ><li>About</li></Link>
                <Link to='/sign' style={{ color:'white',textDecoration:'none'  }}><li >Sign up</li></Link>
               </ul>
            </nav>
         </header>   
         </div>
  )
}
