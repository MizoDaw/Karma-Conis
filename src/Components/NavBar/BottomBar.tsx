import React from 'react'
import DropdownMenu from '../Ui/DropdownMenu'
import DropDown from '../Ui/DropDown'
import ViewCart from './ViewCart'
import { Link, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const BottomBar = () => {
  const [t] = useTranslation();
  const  path = useLocation()
  

  return (
    <div className="BottomBar">
              {path?.pathname != '/Products' &&<DropdownMenu/> }
          <div className='NavMenus'>
          <Link className='Link' to={'/'} >  <h1>{t("home")}</h1> </Link>
          <Link className='Link' to={'/about'} >  <h1>{t("about")}</h1> </Link>
          <Link className='Link' to={'/contact'} >  <h1>{t("contact")}</h1> </Link>
          <Link className='Link' to={'/become_partner'} >  <h1>{t("Become Partner")}</h1> </Link>
          <Link className='Link' to={'/Products'} >  <h1>{t("Products")}</h1> </Link>
          <Link className='Link' to={'/orders'} >  <h1>{t("orders")}</h1> </Link>
          </div>
          <div>
            {/* <ViewCart/> */} 
          </div>
    </div>
  )
}

export default BottomBar