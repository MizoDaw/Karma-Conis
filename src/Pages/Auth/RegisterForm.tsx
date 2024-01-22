import { Field, Form, Formik } from 'formik'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { useRegister } from '../../api/auth';
import { LoadingButton } from '../../Components/Utils/Loading/LoadingButton';
import { useDispatch } from 'react-redux';
import { register } from '../../Redux/auth/AuthReducer';
import { useTranslation } from 'react-i18next';

function RegisterForm({ handleLoginClick }: any) {
  const navigate = useNavigate()
  const { mutate, isSuccess, data , isLoading } = useRegister()
  const [t] = useTranslation()
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

          <h2>{t("Create Account")}</h2>
          <div className='login_dev'>
          <label>{t("Name")}</label>
          <Field name="name" type="text" placeholder="Name" />
          </div>
          <div className='login_dev'>
            <label>{t("Email")}</label>
          <Field name="email" type="email" placeholder="Email" />

          </div>
          <div className='login_dev'>
          <label>{t("Password")}</label>
          <Field name="password" type="password" placeholder="Password" />
          </div>
          <LoadingButton isLoading={isLoading}>{t("Sign Up")}</LoadingButton >
          <p className='navigateto' onClick={handleLoginClick} >{t("or login")}</p>

        </Form>
      </Formik>

    </div>
  )
}

export default RegisterForm