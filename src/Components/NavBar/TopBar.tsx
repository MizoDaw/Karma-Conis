import React from 'react'
import { BsFacebook, BsGoogle, BsInstagram } from 'react-icons/bs'
import Theme from '../Utils/Theme'
import Translate from '../Utils/Translate'
import { Link } from 'react-router-dom'
import { MenuFoldOutlined } from '@ant-design/icons'
import { DATASOCIALMEDIA } from '../../config/SOCIALMEDIA'

const TopBar = (data:any) => {
  const SosialMediaData =data?.data?.data?.socialmedia
  console.log(SosialMediaData,"SosialMediaData");
  
  
  return (

       <div className='HeaderContainer'>
        <header className='Header'>
         
        <Link to={'/'} >  <h1>Karma Antique Coins</h1> </Link>

          <nav>
            <div className="Menu_Group">
              <Link className='Link' to={'/'} >  <h1>Register</h1> </Link>
              <Link className='Link' to={'/'} >  <h1>Login</h1> </Link>
              
              <Theme/>
              <Translate/>
            </div>

            <ul className='Media_Icon'>
             {SosialMediaData?.map((item:any,index:any)=>{
              return(
              <li key={index}><a href={item?.social_media_link}>
                <img className='SocialMediaIMage' src={item?.social_media_image} alt="" />
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