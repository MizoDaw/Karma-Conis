import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next';
import {  useNavigate } from 'react-router-dom';
import { TOKEN_KEY } from '../../config/AppKey';
import { Formik, Form, Field } from 'formik';
import { useLogin, useRegister } from '../../api/auth';
const Auth = () => {
  const [isActive, setIsActive] = useState(false);

  const {mutate , isSuccess , data} = useLogin()
  const {mutate:mutate2 , isSuccess:Success , data:data2} = useRegister()

  const handleRegisterClick = () => {
    setIsActive(true);
  };

  const handleLoginClick = () => {
    setIsActive(false);
  };  
  const [t] = useTranslation();

  const navigate = useNavigate()

  
  const handelSubmit = (values:any)=>{

      console.log(values);
      
      if(isActive){
          mutate2(
            {
              name:values['name'],
              email:values['email'],
              password:values['password']
            }
          )
      }else{

        mutate({
          email:values['email'],
          password:values['password']
        })
      } 
    
  }

  useEffect(()=>{
    if(isSuccess){
      console.log(data);
      localStorage.setItem(TOKEN_KEY, (data as any )?.data?.token)
    navigate('/', { replace: true })
      
    }
  },[isSuccess])
  useEffect(()=>{
    if(Success){
      console.log(data2);
      localStorage.setItem(TOKEN_KEY, (data2 as any )?.data?.token)
    navigate('/', { replace: true })
      
    }
  },[Success])
  return (
    <div className='Auth'>
<div  id="container" className={isActive ? 'container active' : 'container'}>
  <div className="form-container sign-up">
  <Formik
        initialValues={{ name: '',email:"", password: '' }}
        onSubmit={handelSubmit}
      >
        <Form>
    {/* <form> */}
      <h1>Create Account</h1>
      <span>or use your email for registeration</span>
      <Field name="name" type="text" placeholder="Name" />
      <Field name="email" type="email" placeholder="Email" />
      <Field name="password" type="password" placeholder="Password" />
      <button>Sign Up</button>
      <p className='navigateto' onClick={handleLoginClick} >or login</p>

    </Form>
    </Formik>

  </div>

  <div className="form-container sign-in">
  <Formik
        initialValues={{ username: '', password: '' }}
        onSubmit={handelSubmit}
      >
        <Form>
      <h1>Sign In</h1>
     
      <span>or use your email password</span>
      <Field name="email" type="email" placeholder="Email" />
      <Field name="password" type="password" placeholder="Password" />
      <a href="#">Forget Your Password?</a>
      <button>Sign In</button>
      <p className='navigateto' onClick={handleRegisterClick} >or Register</p>


      </Form>
    </Formik>
  </div>
  <div className="toggle-container">
    <div className="toggle">
      <div className="toggle-panel toggle-left">
        <h1>Welcome Back!</h1>
        <p>Enter your personal details to use all of site features</p>
        <button className="hidden" id="login" onClick={handleLoginClick}>
          Sign In
        </button>

      </div>
      <div className="toggle-panel toggle-right">
        <h1>Hello, Friend!</h1>
        <p>Register with your personal details to use all of site features</p>
        <button className="hidden" id="register" onClick={handleRegisterClick}>
          Sign Up
        </button>
      </div>
    </div>
  </div>
</div>




    </div>
  )
}

export default Auth