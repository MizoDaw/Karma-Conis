import React from 'react'
import { useTranslation } from 'react-i18next';
import { FaCircleCheck } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';

const SuccessVerify = () => {

    const Navigate = useNavigate();
    const {t} = useTranslation();
    
    const handleNavigate =() => {
        Navigate('/')
    }
  return (
    <div className='SuccessVerify'>
        {/* <img src='/logo/Logo.png'/> */}
        <FaCircleCheck/>
        <h5>{t("Your Email has been verfied successfully")}..
            <p>{t("You can continue useing the website")}.</p>
        </h5>
        <button onClick={handleNavigate}>{t("Home")}</button>
    </div>
  )
}

export default SuccessVerify