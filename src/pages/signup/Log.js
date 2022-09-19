import React,{useState} from 'react'
import cosmonaut from '../../img/foto-spazio9-1.jpg';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './log.css'


export  function Log() {
    let [state,setstate]=useState({})
    const validationSchema = Yup.object({ 
        email:Yup.string().email(" ").matches(/(.ru|.com)$/g," ").required('required'),
       pass:Yup.string().matches(/^[A-Z]/g, " ").matches(/[#$^@_-]{1}/g, " ").matches(/[0-9]/g, " ").min(8).max(14).required('required')
    })    
      const initialValues = {
        email: '',
        pass: '',
    }
    let on = (values) => {
      setstate(values)
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
{formik.errors.pass && formik.touched.pass || formik.errors.email && formik.touched.email ? <p >Incorrect email or password.</p> : null}<br/>
<label htmlFor='email'>Email</label><br/>
<Field type='email' name='email'   />
<ErrorMessage name='email' component='p' /><br/>
<label htmlFor='pass'>Password</label><br/>
<Field type='password' name='pass'/>
<ErrorMessage name='pass' component='p' />
<button type='submit'  disabled={!formik.isValid}>Sign in</button>
</div>
</section>
</Form>
)
 }}
    </Formik>
   </div>
  )
}
