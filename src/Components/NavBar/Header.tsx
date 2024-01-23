import React, { useState } from 'react'
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { useAuth } from '../../Hooks/useAuth';
import DropDown from '../Ui/DropDown';
import { logout } from '../../Redux/auth/AuthReducer';
import { FaEnvelope, FaUser } from 'react-icons/fa';
import { Dropdown } from 'antd';
import { NavLink } from 'react-router-dom';
import Translate from '../Utils/Translate';

const HeaderText = 'Karma Antique Ecommerce'
const Header = () => {
  const [t] = useTranslation();
  const {isAuthenticated} = useSelector((state:any) => state.auth)

  const dispatch = useDispatch()
  



  return (
    <div className='Header d-flex'>
     
      <div className='Header__Left'>


        <div className='Sha5da'><FaEnvelope /> {"info@leunumismatik.com"}</div>
        {/* <div> {t(`${HeaderText}`)} </div> */}
      </div>

      <div className='Header__Right'>
       
        <div className='Header__Right_2'>
          <Translate/>
        </div>
        <div className='Header__Right_3' >
          {
          isAuthenticated? (
                <div onClick={()=>{
                  dispatch(logout())
                }}>
                    <FaUser size={13}/>
                {t("Logout")}
                </div>
            ) : (
              <NavLink to={'/auth'}>
               <FaUser size={13}/>
                {t("Login")}
              </NavLink>
             
            )
          }
          
        </div>


      </div>

    </div>
  )
}

export default Header