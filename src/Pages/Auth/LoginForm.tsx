import { Field, Form, Formik } from 'formik'
import React, { useEffect } from 'react'
import { useLogin } from '../../api/auth'
import { LoadingButton } from '../../Components/Utils/Loading/LoadingButton'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { login } from '../../Redux/auth/AuthReducer'

function LoginForm({handleRegisterClick}:any) {
  const Navigate = useNavigate() 
    const {mutate , isSuccess ,isLoading, data} = useLogin()
    const dispatch = useDispatch()

    const handelSubmit = (values:any)=>{

        mutate({
            email:values['email'],
            password:values['password']
          })
    }
    
    useEffect(()=>{
      if(isSuccess){
        dispatch(login((data as any )?.data))
        
      Navigate('/', { replace: true })
        
      }
    },[isSuccess , Navigate, dispatch , data])
  return (
    <div className="form-container sign-in">
  <Formik 
        initialValues={{ email: '', password: '' }}
        onSubmit={handelSubmit}
      >
        <Form >
      {/* <img  src='/logo/Logo.png' style={{width:210}} /> */}
      <img  src='/logo/logo3.png' style={{width:110}} />

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