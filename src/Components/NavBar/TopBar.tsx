import React from 'react'
import { BsFacebook, BsGoogle, BsInstagram } from 'react-icons/bs'
import Theme from '../Utils/Theme'
import Translate from '../Utils/Translate'
import { Link } from 'react-router-dom'
import { MenuFoldOutlined } from '@ant-design/icons'
import { DATASOCIALMEDIA } from '../../config/SOCIALMEDIA'
import { BaseURL } from '../../api/config'
import { MdOutlineEmail } from "react-icons/md";
import { FaPhone } from 'react-icons/fa'

const TopBar = (data:any) => {
  const SosialMediaData =data?.data?.data?.socialmedia
  
  
  return (

       <div className='HeaderContainer'>
        <header className='Header'>
         <span style={{display:'flex' , alignItems:"center"}}>
          
         <MdOutlineEmail style={{marginInline:"5px"}} size={20}/>  ibrahim@gmail.com  
          <span style={{marginInline:"10px"}}></span>
         <FaPhone size={20}  style={{marginInline:"5px"}}/>  0951968994
         </span>

          <nav>
            <div className="Menu_Group">
              <Link className='Link' to={'/'} >  <h1>Register</h1> </Link>
              <Link className='Link' to={'/'} >  <h1>Login</h1> </Link>
              
              {/* <Theme/> */}
              {/* <Translate/> */}
            </div>

            <ul className='Media_Icon'>
             {SosialMediaData?.map((item:any,index:any)=>{

              return(
              <li key={index}><a href={item?.social_media_link}>
                <img className='SocialMediaIMage' src={BaseURL + item?.social_media_image} alt="" />
                </a></li>
              )
             })}
            </ul>
            <div className='MenuNav'>

            <MenuFoldOutlined/>
            </div>
          </nav>
        </header>
      </div>

    
  )
}

export default TopBar