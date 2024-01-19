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

const HeaderText = 'KARMNTINA'
const Header = () => {
  const [t] = useTranslation();
  const { isAuthenticated } = useAuth();
  const state = useSelector((state:any) => state.auth)

  console.log(state);
  const [refreash , setRefreash] = useState(false)
  const dispatch = useDispatch()
  
  const [Open, setOpen] = useState(false)



  return (
    <div className='Header d-flex'>
      {Open ? <div className='BlackScreen'></div> : ''}
     
      <div className='Header__Left'>


        <div className='Sha5da'><FaEnvelope /> {"hello"}</div>
        <div> {t(`${HeaderText}`)} </div>
      </div>

      <div className='Header__Right'>
       
        <div className='Header__Right_2'>
          {/* <LanguageDropdown /> */}
          <Translate/>
          {/* <Dropdown/> */}
        </div>
        <div className='Header__Right_3' >
          {
          isAuthenticated? (
                <div onClick={()=>{
                  dispatch(logout())
                  setRefreash(v => !v)
                }}>
                    <FaUser size={13}/>
                {t("Logout")}
                </div>
            ) : (
              <NavLink to={'/login'}>
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