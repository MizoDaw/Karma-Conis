import React, { useState } from 'react'
import { BsFacebook, BsGoogle, BsInstagram } from 'react-icons/bs'
import Theme from '../Utils/Theme'
import Translate from '../Utils/Translate'
import { Link, useNavigate } from 'react-router-dom'
import { MenuFoldOutlined } from '@ant-design/icons'
import { DATASOCIALMEDIA } from '../../config/SOCIALMEDIA'
import { BaseURL } from '../../api/config'
import { MdOutlineEmail } from "react-icons/md";
import { FaPhone } from 'react-icons/fa'
import { TOKEN_KEY } from '../../config/AppKey'

const TopBar = (data:any) => {
  const SosialMediaData =data?.data?.data?.socialmedia
  const [isAuth , setIsAuth] = useState<any>(localStorage.getItem(TOKEN_KEY))
  
  const navigate = useNavigate()
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
              {
               ! isAuth ?
                <>
                  {/* <Link className='Link' to={'/auth'} onClick={()=>navigate('/auth' )}>  <h1>Register</h1> </Link> */}
                   <Link className='Link' to={'/auth'}  onClick={()=>navigate('/auth' )}>  <h1>Login</h1> </Link>
              
                </>:
                <>

                <h1 onClick={()=>{
                  localStorage.removeItem(TOKEN_KEY)
                  setIsAuth(false)
                }}>Logout</h1>
                </>

              }
            
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