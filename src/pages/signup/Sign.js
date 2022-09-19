import React,{useState} from 'react'
import cosmonaut from '../../img/foto-spazio9-1.jpg';
import dhrova from '../../img/Dhruva-Final.png';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Link } from "react-router-dom";
import * as Yup from 'yup';
import './sign.css'

const API_KEY = process.env.REACT_APP_API_KEY;
console.log(API_KEY)

export   function Sign() {
const [state,setstate]=useState({})
const onSubmit = values=>{
  registerHandler(values)
  setstate(values)
}
const initialValues = {
  nam:"",
  email: '',
  pass: '',
}
const validationSchema = Yup.object({
  nam:Yup.string().min(4).max(9).required('required'),
  email:Yup.string().email(" ").matches(/(.ru|.com)$/g," ").required('required'),
 pass:Yup.string().matches(/^[A-Z]/g, " ").matches(/[#$^@_-]{1}/g, " ").matches(/[0-9]/g, " ").min(8).max(14).required('required')
})

function registerHandler(values) {
  const data = { ...values, returnSecureToken:true};
  console.log(data);
  fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`, {
    method: "POST",
    body: JSON.stringify(data)
  })
  .then(response => console.log(response))
  .catch(err => console.log(err))
}
  return (
<div>
    <Formik
    validationSchema={validationSchema}
    initialValues={initialValues}
    onSubmit={onSubmit}>
 {formik=>{
return(
<Form>
    <img  src={cosmonaut}  className='cls'/> 
<section className='sign'>
  <div className='reg'>
  <h1>Get Started</h1><br/>
  <p>Already have on Account ?   <Link to='/login' style={{  color:'rgb( 212,124,103)',textDecoration:'none'  }}> <span>Log in</span> </Link></p><br/>
  {formik.errors.pass && formik.touched.pass || formik.errors.email && formik.touched.email ? <p >Incorrect email or password.</p> : null}
<label htmlFor='nam'>Name</label>
<Field type='text' name='nam'/>
<ErrorMessage name='nam' component='p' />
<label htmlFor='email'>Email</label>
<Field type='email' name='email'   />
<ErrorMessage name='email' component='p' />
<label htmlFor='pass'>Password</label>
<Field type='password' name='pass'/>
<ErrorMessage name='pass' component='p' />
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
    </div>
  )
}
