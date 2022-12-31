import React,{useState,useContext} from 'react'
import cosmonaut from '../../img/foto-spazio9-1.jpg';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Link } from "react-router-dom";
import * as Yup from 'yup';
import {Cont} from './Sign'
import './log.css'
import axios from 'axios';

const API_KEY = process.env.REACT_APP_API_KEY;

export  function Log() {
    let [state,setstate]=useState({})
    let [name,setname]=useState()
    const user=useContext(Cont)


    const validationSchema = Yup.object({ 
        email:Yup.string().email(" ").matches(/(.ru|.com)$/g," ").required('required'),
       password:Yup.string().matches(/^[A-Z]/g, " ").matches(/[#$^@_-]{1}/g, " ").matches(/[0-9]/g, " ").min(8).max(14).required('required')
    })    
      const initialValues = {
        email: '',
        password: '',
    }
    let on = (values) => {
      setstate(values)
      
    }

async function login(){
  const data = { ...user, returnSecureToken:true};
  setname(data.name)
  console.log(data)
   await axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`,data)
   .then(response => console.log(response))
	.catch(err => console.log(err))
}
console.log(name)
  return (
    <div>
    <Formik
    validationSchema={validationSchema}
    initialValues={initialValues}
    onSubmit={on}
    validateOnChange={false}
    validateOnBlur={true}>
 {formik=>{

return(
<Form>
<img  src={cosmonaut}  className='i'/>  
<section className='log'>
  <div className='login'>
  <p className='account'>You don't have an account?<Link to='/sign' style={{  color:'rgb( 212,124,103)',textDecoration:'none'  }}> <span className='registr'>Registreition</span> </Link></p><br/>
{formik.errors.pass && formik.touched.pass || formik.errors.email && formik.touched.email ? <p className='error'>Incorrect email or password.</p> : null}<br/>
<label htmlFor='email'>Email</label><br/>
<Field type='email' name='email'   />
<ErrorMessage name='email' component='p'  className="error"/><br/>
<label htmlFor='pass'>Password</label><br/>
<Field type='password' name='password'/>
<ErrorMessage name='password' component='p'  className="error" />
<button type='submit'  disabled={!formik.isValid} onClick={()=>{setstate(user);login()}}>Sign in</button>
</div>
</section>
</Form>
)
 }}
    </Formik>
   </div>
  )
}
