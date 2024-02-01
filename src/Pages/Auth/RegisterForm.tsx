import { Field, Form, Formik, useFormikContext } from 'formik'
import React, { useEffect, useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useRegister } from '../../api/auth';
import { LoadingButton } from '../../Components/Utils/Loading/LoadingButton';
import { useDispatch } from 'react-redux';
import { register } from '../../Redux/auth/AuthReducer';
import { useTranslation } from 'react-i18next';
// import Select from 'react-select'
//@ts-ignore
import countryList from 'react-select-country-list'
import { Select, Space } from 'antd';

function RegisterForm({ handleLoginClick }: any) {
  const navigate = useNavigate()
  const { mutate, isSuccess, data , isLoading } = useRegister()
  const [t] = useTranslation()
  const dispatch = useDispatch()
  const [value, setValue] = useState('')
  

  const handelSubmit = (values: any) => {

    mutate(
      {
        name: values['name'],
        email: values['email'],
        password: values['password'],
        country:value,
        phone: values['phone']

      }
    )


  }


  useEffect(() => {
    if (isSuccess) {
      dispatch(register((data as any)?.data))
   
      navigate('/', { replace: true })

    }
  }, [isSuccess, navigate, data , dispatch])

  const options = useMemo(() => countryList().getData(), [])
  const formik = useFormikContext();

  const SelecthandleChange = (value:any,label:any) => {
    
    setValue(label?.label)

 };
  return (
    <div className="form-container sign-up">
      <Formik
        initialValues={{ name: '', email: "", password: '',country:"", phone:"" }}
        onSubmit={handelSubmit}
      >
        <Form>
          {/* <form> */}
          <img  src='/logo/LogoDone.png' style={{width:100}}  alt='LOGO'/>

          <h2>{t("Create Account")}</h2>
          <div className='login_dev'>
                 <Field name="name" type="text" placeholder="Name" />
          </div>
          <div className='login_dev'>
                   <Field name="email" type="email" placeholder="Email" />

          </div>
          <div className='login_dev'>

          <Select
          style={{ width: "100%" }}
      onChange={SelecthandleChange}
      options={options}
      placeholder="choose your country"
    />
          </div>
          <div className='login_dev'>
                   <Field  name="phone" type="text" placeholder="phone" />

          </div>
          <div className='login_dev'>
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