
import React, { useState } from 'react'
import { Button, Input, Result } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useSendCode, useVerify } from '../../api/auth';
import { useTranslation } from 'react-i18next';
import ReactCodeInput from 'react-verification-code-input';
import { toast } from 'react-toastify';
import Translate from '../../Components/Utils/Translate';

const Virefied = () => {
  const Navigate = useNavigate();
  const {t} = useTranslation();

  const [isInvalid, setIsInvalid] = useState(false);
  const { mutate, isSuccess, data , isLoading } = useVerify()
  const { mutate:mutateCode, isSuccess:codeSuccess, data:codeData } = useSendCode()


  const handleSubmit = () =>{
    if (isSuccess){
      Navigate('/success_verify');
      toast.success(t("Verified Successfully"))
    }
    else{
      setIsInvalid(true)
      toast.error(t("Invalid Code"))
    }
  }
  const handleSendCode = () => {
    if(codeSuccess){

      toast.success(t('Code has been send successfully to your email'))
    }else{

      toast.error(t('Error while sending code plaese try agian later'))
    }
  }
  return (

  <div className='Virefied'>
    <Translate/>
      <Result
      className='Result'
      status="404"
      title={t("code Send to your Email Verified it")}
      subTitle={t("Enter your verification code that we sent to you through your E-mail.")}
      extra={
        <div>
          <ReactCodeInput className='ReactCodeInput'/>
          {
            isInvalid ? <p>{t("Verification code is invalid")}..</p> : "" 
          }
          <span onClick={handleSendCode}>{t("Resend Code")}</span>
        </div>
      }
      children={<div className='button_container'><button className='verify_button' onClick={handleSubmit}>{t("Submit")}</button></div>}
    />
  </div>
    )
}

export default Virefied