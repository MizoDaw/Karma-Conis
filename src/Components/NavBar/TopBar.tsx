import React from 'react'
import { BsFacebook, BsGoogle, BsInstagram } from 'react-icons/bs'
import Theme from '../Utils/Theme'
import Translate from '../Utils/Translate'
import { Link } from 'react-router-dom'
import { MenuFoldOutlined } from '@ant-design/icons'
import { DATASOCIALMEDIA } from '../../config/SOCIALMEDIA'

const TopBar = (data:any) => {
  console.log(data);
  const {Social} = data;
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
              <li><a href={Social?.data?.socialmedia[0]?.social_media_link}><BsFacebook/></a></li>
              <li><a href="/about"><BsGoogle/></a></li>
              <li><a href="/about"><BsInstagram/></a></li>
              
              {/* {
                DATASOCIALMEDIA.map((icon ,index):any =>{
                  const object_is_exist = data?.find(social => social.icon == icon.key)
                  return (    
                          <a href={object_is_exist?.link} target='_blank' className='btn  btn-lg btn-floating' key={index} style={{marginLeft:"5px"}} >
                            {icon.icon}
                          </a>
                    )
                  }
                )
              } */}
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