import {useEffect,useState} from 'react'
import axios from 'axios';
import avatar from '../../img/avatars-000453283032-amzg3b-t500x500.jpg'
import './profil.css';
import { FaSignOutAlt } from 'react-icons/fa';
import { useNavigate } from "react-router-dom";

export default function Profil() {
   const navigate = useNavigate();
   let [name,setname]=useState('')
   const [isLoggedIn, setIsLoggedIn] = useState(
      localStorage.getItem('bool') === 'true'
    );

let boolean=window.localStorage.getItem('bool')
let n=window.localStorage.getItem('name')
useEffect(()=>{
if(isLoggedIn===true && JSON.parse(window.localStorage.getItem('name')).name===undefined ){
  let a= JSON.parse(window.localStorage.getItem('name')).email
 let slice_mail= a.slice(0,7)
  setname(slice_mail)
}else if(window.localStorage.getItem('name')===null){
  window.localStorage.setItem('bool','false')
}else if(isLoggedIn===true && JSON.parse(window.localStorage.getItem('name')).name!==undefined){
  let b= JSON.parse(window.localStorage.getItem('name')).name
  setname(b)
}
},[name])

const signout=()=>{
  window.localStorage.setItem('bool','false')
  localStorage.removeItem('name')
  document.location.reload()
  navigate('/sign')

}

  return (
<>
{isLoggedIn==false?(null):(
<div className='profil'>
<section className='profil_two'>
<img src={avatar}/>
<div className='name'>
    <h1>{name}  <FaSignOutAlt onClick={signout} className='out'/></h1>
</div>
    </section>
          </div>
)}
</>
  )
}
