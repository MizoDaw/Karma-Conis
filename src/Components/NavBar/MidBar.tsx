import KarimLogo from '../../Layout/app/KarimLogo'
import InputAutoComplete from './InputAutoComplete'
import { Link, useNavigate } from 'react-router-dom';
import ViewCart from './ViewCart';
import { MenuOutlined, ShoppingCartOutlined, UserOutlined } from '@ant-design/icons';
import WithDrawer from '../../HighOrderComponent/WithDrawer';
import { Button, Divider, Tooltip } from 'antd';
import Theme from '../Utils/Theme';
import Translate from '../Utils/Translate';
import { CiHome } from "react-icons/ci";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { MdOutlinePhonelinkRing } from "react-icons/md";
import { LuBoxes } from "react-icons/lu";
import { useState } from 'react';
import { TOKEN_KEY } from '../../config/AppKey';
import { FaPhoneAlt } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../Redux/auth/AuthReducer';
import DropdownMenu from '../Ui/DropdownMenu';
import { useTranslation } from 'react-i18next';
import { FaRegHeart } from "react-icons/fa6";

const MidBar = () => {
  const navigate = useNavigate()
  const {t} = useTranslation();


  return (
    <div className="MidBar">
        <div className='MidBar_Left'>  
          <div className='logo_contianer'>
            <Link className='logo' to="/">
              <img src='/logo/LogoDone.png' alt='logo' className='logo'/>
            </Link>
          </div>
        </div>
        <div className='MidBar_Mid'>
            <InputAutoComplete/>
        </div>
        <div className='MidBar_Right'>
        <div className='Top_Section_Right'>
          {/* <div className="Cart_Icon"  onClick={()=>navigate('/favourite')}>
          <Tooltip title={t("favourite")}>
            <FaRegHeart />
          </Tooltip>

          </div> */}
            <div className='Phone1'>
            <Tooltip title="0097466456660" >
            <FaPhoneAlt/>

            </Tooltip>
            </div>
            </div>
              <ViewCart/>
            
              
   
        </div>
        <div className='MediaMenu'> 
        {/* <ViewCart/> */}
        <WithDrawer
              // title='Karma Antique'
              button={<Button icon={<MenuOutlined />} className='MenuButton' type='primary' />}
            >
              
            <div className="Menu_anv">
              {/* <Translate/> */}
              <div className='logo_drawer_container'>
                <h1>Karma Coins
                  <br/>
                </h1>

                <div className='logo_bg'>
                  <img src='./logo/LogoDone.png' alt='logo' className='logo_drawer'/>
                </div>
              </div>
              <Divider/>
              <Link className='Link_NavMenu' to={'/'} >  <h1> <CiHome/> {t("Home")}</h1> </Link>
              <Link className='Link_NavMenu' to={'/about'} >  <h1><IoIosInformationCircleOutline/>  {t("about")}</h1> </Link>
              <Link className='Link_NavMenu' to={'/contact'} >  <h1><MdOutlinePhonelinkRing/> {t("contact")}</h1> </Link>
              <Link className='Link_NavMenu' to={'/products'} >  <h1> <LuBoxes/> {t("Products")}</h1> </Link>
              <Link className='Link_NavMenu' to={'/cart'} >  <h1> <ShoppingCartOutlined/> {t("cart")}</h1> </Link>
              <Link className='Link_NavMenu' to={'/orders'} >  <h1> <ShoppingCartOutlined/> {t("orders")}</h1> </Link>

            </div>
                      <Divider/>
                      <DropdownMenu/>


            </WithDrawer>
      </div>
    </div>
  )
}

export default MidBar