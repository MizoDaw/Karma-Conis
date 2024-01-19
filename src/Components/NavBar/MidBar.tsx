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

const MidBar = () => {
  const [isAuth , setIsAuth] = useState<any>(localStorage.getItem(TOKEN_KEY))
  const navigate = useNavigate()

  return (
    <div className="MidBar">
        <div className='MidBar_Left'>  
          <div className='logo_contianer'>
            <Link className='logo' to="/">
              <img src='/logo/logo3.png' alt='logo' className='logo'/>
            </Link>
          </div>
        </div>
        <div className='MidBar_Mid'>
            <InputAutoComplete/>
        </div>
        <div className='MidBar_Right'>
        <div className='Top_Section_Right'>
                <div className='Phone1'>
            <Tooltip title="0951968994" >
            <FaPhoneAlt/>

            </Tooltip>
            </div>
            <div className='Phone2'>
            {/* <h3>{('951968994')}</h3> */}
            
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
                  {
                    ! isAuth ?
                      <>
                        <Link className='Link' to={'/auth'}  onClick={()=>navigate('/auth' )}>  <h1>Login</h1> </Link>
                    
                      </>:
                      <>

                      <h1 onClick={()=>{
                        localStorage.removeItem(TOKEN_KEY)
                        setIsAuth(false)
                      }}>Logout</h1>
                      </>

                    }
                </h1>

                <div className='logo_bg'>
                  <img src='../logo-without-text.png' alt='logo' className='logo_drawer'/>
                </div>
              </div>
              <Divider/>
              <Link className='Link_NavMenu' to={'/'} >  <h1> <CiHome/> Home</h1> </Link>
              <Link className='Link_NavMenu' to={'/about'} >  <h1><IoIosInformationCircleOutline/>  About</h1> </Link>
              <Link className='Link_NavMenu' to={'/contact'} >  <h1><MdOutlinePhonelinkRing/> Contact</h1> </Link>
              <Link className='Link_NavMenu' to={'/products'} >  <h1> <LuBoxes/> Products</h1> </Link>
              <Link className='Link_NavMenu' to={'/cart'} >  <h1> <ShoppingCartOutlined/> Cart</h1> </Link>

            </div>
              {/* <Theme/> */}
              

            </WithDrawer>
      </div>
    </div>
  )
}

export default MidBar