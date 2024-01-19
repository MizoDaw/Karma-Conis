import { Field, Form, Formik } from 'formik'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { useRegister } from '../../api/auth';
import { LoadingButton } from '../../Components/Utils/Loading/LoadingButton';
import { useDispatch } from 'react-redux';
import { register } from '../../Redux/auth/AuthReducer';

function RegisterForm({ handleLoginClick }: any) {
  const navigate = useNavigate()
  const { mutate, isSuccess, data , isLoading } = useRegister()

  const dispatch = useDispatch()
  const handelSubmit = (values: any) => {

    mutate(
      {
        name: values['name'],
        email: values['email'],
        password: values['password']
      }
    )


  }


  useEffect(() => {
    if (isSuccess) {
      dispatch(register((data as any)?.data))
   
      navigate('/', { replace: true })

    }
  }, [isSuccess, navigate, data , dispatch])
  return (
    <div className="form-container sign-up">
      <Formik
        initialValues={{ name: '', email: "", password: '' }}
        onSubmit={handelSubmit}
      >
        <Form>
          {/* <form> */}
          <img  src='/logo/logo3.png' style={{width:100}}  alt='LOGO'/>

          <h2>Create Account</h2>
          <div className='login_dev'>
          <label>Name</label>
          <Field name="name" type="text" placeholder="Name" />
          </div>
          <div className='login_dev'>
            <label>Email</label>
          <Field name="email" type="email" placeholder="Email" />

          </div>
          <div className='login_dev'>
          <label>Password</label>
          <Field name="password" type="password" placeholder="Password" />
          </div>
          <LoadingButton isLoading={isLoading}>Sign Up</LoadingButton >
          <p className='navigateto' onClick={handleLoginClick} >or login</p>

        </Form>
      </Formik>

    </div>
  )
}

export default RegisterForm