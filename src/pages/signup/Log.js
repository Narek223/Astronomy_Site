import React,{useState,useContext,useEffect} from 'react'
import cosmonaut from '../../img/foto-spazio9-1.jpg';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Link,useNavigate} from "react-router-dom";
import * as Yup from 'yup';
import {Cont} from './Sign';
import './log.css';
import axios from 'axios';

const API_KEY = process.env.REACT_APP_API_KEY;

export  function Log() {
    let [state,setstate]=useState()
    let [name,setname]=useState()
    const user=useContext(Cont)
    const navigate = useNavigate();
    let [status,setstatus]=useState([])

    const validationSchema = Yup.object({ 
        email:Yup.string().required('Please enter your email').email("This isn't not correct email format").matches(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/," "),
       password:Yup.string().required('Please enter your password').matches(/[A-Z]{1}/g,"password must contein  capital letter ").matches(/[#$^@_-]{1}/g,"Password must contain one symbol ").matches(/[0-9]/g,'Password must contain numbers ').min(8,'Minimum password length 8').max(14,'Maximum password length 14')
    })    
      const initialValues = {
        email: '',
        password: '',
    }
    let on = (values) => {
      setstate(values)

    }
    async function login(){
      const data = { ...state, returnSecureToken:true};
      setname(data)
 
    console.log(data)
       await axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`,data)
       .then(response => setstatus(response.status))
      .catch(err => console.log(err))

  
    }

    if(status===200){
      window.localStorage.setItem('name',JSON.stringify(state))
      window.localStorage.setItem('bool','true')
      document.location.reload()
      navigate('/')
    }
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
<label htmlFor='password'>Password</label><br/>
<Field type='password' name='password'/>
<ErrorMessage name='password' component='p'  className="error" />
<button type='submit'  disabled={!formik.isValid} onClick={()=>{setstate(state);login()}}>Sign in</button>
</div>
</section>
</Form>
)
 }}
    </Formik>
   </div>
  )
}
