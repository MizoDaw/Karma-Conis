import KarimLogo from '../../Layout/app/KarimLogo'
import InputAutoComplete from './InputAutoComplete'
import { Link } from 'react-router-dom';
import ViewCart from './ViewCart';
import { MenuOutlined, UserOutlined } from '@ant-design/icons';
import WithDrawer from '../../HighOrderComponent/WithDrawer';
import { Button } from 'antd';
import Theme from '../Utils/Theme';
import Translate from '../Utils/Translate';
import { CiHome } from "react-icons/ci";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { MdOutlinePhonelinkRing } from "react-icons/md";
import { LuBoxes } from "react-icons/lu";

const MidBar = () => {

  return (
    <div className="MidBar">
        <div className='MidBar_Left'>  
          <div className='logo_contianer'>
            <Link className='logo' to="/">
              <img src='../logo-without-text.png' alt='logo' className='logo'/>
            </Link>
          </div>
        </div>
        <div className='MidBar_Mid'>
            <InputAutoComplete/>
        </div>
        <div className='MidBar_Right'>
        {/* <div className="Cart_Icon"> */}
        {/* <span style={{display:"flex" , flexDirection:"column",  alignItems:"center", marginTop:"20px"}}>
          <UserOutlined  />
          <p style={{}}>ibrahim</p>
        </span> */}

          {/* </div> */}
   <ViewCart/>
    

        </div>
        <div className='MediaMenu'> 
        <WithDrawer
              // title='Karma Antique'
              button={<Button icon={<MenuOutlined />} className='MenuButton' type='primary' />}
            >
              
            <div className="Menu_anv">
              {/* <Translate/> */}
              <div className='logo_drawer_container'>
                <img src='../logo-without-text.png' alt='logo' className='logo_drawer'/>
              </div>
              <Link className='Link_NavMenu' to={'/'} >  <h1> <CiHome/> Home</h1> </Link>
              <Link className='Link_NavMenu' to={'/about'} >  <h1><IoIosInformationCircleOutline/>  About</h1> </Link>
              <Link className='Link_NavMenu' to={'/contact'} >  <h1><MdOutlinePhonelinkRing/> Contact</h1> </Link>
              <Link className='Link_NavMenu' to={'/products'} >  <h1> <LuBoxes/> Products</h1> </Link>
            </div>
              {/* <Theme/> */}

              <div className="Cart_Icon menu_nav_icon">
                <Link to="/auth">
                  <UserOutlined  />
                </Link>
              </div>
              <ViewCart/>

            </WithDrawer>
      </div>
    </div>
  )
}

export default MidBar