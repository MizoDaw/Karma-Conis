import { Field, Form, Formik } from 'formik'
import React, { useEffect } from 'react'
import { useLogin } from '../../api/auth'
import { LoadingButton } from '../../Components/Utils/Loading/LoadingButton'
import { Navigate, useNavigate } from 'react-router-dom'
import { authStorage } from '../../auth/AuthStorage'

function LoginForm({handleRegisterClick}:any) {
  const Navigate = useNavigate() 
    const {mutate , isSuccess ,isLoading, data} = useLogin()

    const handelSubmit = (values:any)=>{

        mutate({
            email:values['email'],
            password:values['password']
          })
    }
    
    useEffect(()=>{
      if(isSuccess){
        authStorage.storeToken((data as any )?.data?.token)
        authStorage.storeUser((data as any )?.data?.user)
      Navigate('/', { replace: true })
        
      }
    },[isSuccess , Navigate , data])
  return (
    <div className="form-container sign-in">
  <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={handelSubmit}
      >
        <Form>
      <h1>Sign In</h1>
      <div  className='login_dev'>
      <label>Email</label>
      <Field name="email" type="email" placeholder="Email" />
      </div>
      <div className='login_dev'>
      <label>Password</label>
      <Field name="password" type="password" placeholder="Password" />
      </div>
      {/* <a href="#">Forget Your Password?</a> */}
      <LoadingButton  isLoading={isLoading}  >Sign In</LoadingButton>
      <p className='navigateto' onClick={handleRegisterClick} >or Register</p>


      </Form>
    </Formik>
  </div>
  )
}

export default LoginForm