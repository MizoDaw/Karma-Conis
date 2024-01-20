import React from 'react'
import DropdownMenu from '../Ui/DropdownMenu'
import DropDown from '../Ui/DropDown'
import ViewCart from './ViewCart'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const BottomBar = () => {
  const [t] = useTranslation();

  return (
    <div className="BottomBar">
              <DropdownMenu/>
          <div className='NavMenus'>
          <Link className='Link' to={'/'} >  <h1>{t("home")}</h1> </Link>
          <Link className='Link' to={'/about'} >  <h1>{t("about")}</h1> </Link>
          <Link className='Link' to={'/contact'} >  <h1>{t("contact")}</h1> </Link>
          <Link className='Link' to={'/products'} >  <h1>{t("Products")}</h1> </Link>

          </div>
          <div>
            {/* <ViewCart/> */}
          </div>
    </div>
  )
}

export default BottomBar