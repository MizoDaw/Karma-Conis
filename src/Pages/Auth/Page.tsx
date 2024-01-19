import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next';
import {  useNavigate } from 'react-router-dom';
import { TOKEN_KEY } from '../../config/AppKey';
import { Formik, Form, Field } from 'formik';
import { useLogin, useRegister } from '../../api/auth';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
const Auth = () => {
  const [isActive, setIsActive] = useState(false);


  const handleRegisterClick = () => {
    setIsActive(true);
  };

  const handleLoginClick = () => {
    setIsActive(false);
  };  
  const [t] = useTranslation();

  const navigate = useNavigate()

  
  
  return (
    <div className='Auth'>
<div  id="container" className={isActive ? 'container active' : 'container'}>
  <RegisterForm
  handleLoginClick={handleLoginClick}
  />

  <LoginForm  
    handleRegisterClick={handleRegisterClick}
  
  />
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