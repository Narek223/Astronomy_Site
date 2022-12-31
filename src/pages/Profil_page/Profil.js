import {useEffect,useState} from 'react'
import axios from 'axios';
import './profil.css'
import astr from '../../img/photo-1614727187346-ec3a009092b0.png'
export default function Profil() {

    let [num,setnum]=useState([])
//in space now 10 people 

const CancelToken = axios.CancelToken;
const source = CancelToken.source(); 
useEffect(()=>{
    axios('http://api.open-notify.org/astros.json')
    .then(r=>setnum(r.data.number))
    .catch(r=>console.log(r))

},[])

console.log(num)
  return (
    <div class='profil'>

<section className='profil_two'>
<p>in space right now {num} people </p>

<div className='picture'>
    <h1>Astronomy Picture of the Day (APOD) Microservice</h1>

</div>
    </section>

    </div>
  )
}
