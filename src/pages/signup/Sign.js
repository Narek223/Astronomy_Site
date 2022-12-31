import React,{useState,useEffect} from 'react'
import cosmonaut from '../../img/foto-spazio9-1.jpg';
import dhrova from '../../img/Dhruva-Final.png';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Link } from "react-router-dom";
import * as Yup from 'yup';
import './sign.css'
import axios from 'axios'
import {Log} from './Log'


const API_KEY = process.env.REACT_APP_API_KEY;
export const Cont =React.createContext()

export function Sign() {

let [state,setstate]=useState({})
let [status,setstatus]=useState([])

let CancelToken = axios.CancelToken;
let source;


const onSubmit = values=>{
  registerHandler(values)
  setstate(values)

}
const initialValues = {
  name:"",
  email: '',
  password: '',
}
const validationSchema = Yup.object({
  name:Yup.string().min(4).max(9).required('required'),
  email:Yup.string().email(" ").matches(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/," ").required('required'),
 password:Yup.string().matches(/[A-Z]?/g, " ").matches(/[#$^@_-]{1}/g, " ").matches(/[0-9]/g, " ").min(8).max(14).required('required')
})
useEffect(()=>{

  return ()=>{
    if(source){
    console.log(  source.cancel('axios get canseled '))
    }
  }
})
async  function registerHandler(values) {
  source=axios.CancelToken.source(); 
  const data = { ...values, returnSecureToken:true};
  console.log(data)
  await axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`,data,{cancelToken: source.token})
  .then(response => console.log(setstatus(response.status)))
  .catch(err => console.log(err))
  
}

  return (
   
<div>
{ status==200?(
    <Cont.Provider value ={state}>
   <Log />
  </Cont.Provider>
):(
    <Formik
    validationSchema={validationSchema}
    initialValues={initialValues}
    onSubmit={onSubmit}>
 {formik=>{
  setstate(formik.values)
return(
<Form>
    <img  src={cosmonaut}  className='cls'/> 
<section className='sign'>
  <div className='reg'>
  <h1>Get Started</h1><br/>
  <p>Already have on Account ?   <Link to='/login' style={{  color:'rgb( 212,124,103)',textDecoration:'none'  }}> <span>Log in</span> </Link></p><br/>
  {formik.errors.pass && formik.touched.pass || formik.errors.email && formik.touched.email ? <p  className='error'>Incorrect email or password.</p> : null}
<label htmlFor='name'>Name</label>
<Field type='text' name='name'/>
<ErrorMessage name='name' component='p'  className="error" />
<label htmlFor='email'>Email</label>
<Field type='email' name='email'   />
<ErrorMessage name='email' component='p'   className="error"/>
<label htmlFor='password'>Password</label>
<Field type='password' name='password'/>
<ErrorMessage name='password' component='p'  className="error" />
<button type='submit'  disabled={!formik.isValid} >Sign Up</button>
<br/>

</div>
<img src={dhrova} className='dh'/>
<div className='lo'>
  <h1>DHRUVA</h1>
  <p>ASTRONOMY CLUB</p>
</div>
</section>
</Form>
)
 }}
    </Formik>
    )}
    </div>
  )
}
