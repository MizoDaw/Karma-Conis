import React from 'react'
import SubTitle from '../SubTitle'
import CardSwiper from '../CardSwiper'
import { IoIosFlash } from 'react-icons/io'

const Highlight= (data:any,) => {
  // const {  href, count, icon } = data
  const TitleProps = { title:"Highlight", href:"/products?is_highlight=true", count:"", icon:<IoIosFlash/> }
    
  if (data?.data?.length > 0) {
    return (

      <div className='ProductSection'>
        <SubTitle  {...TitleProps}  />
        <div className='Cards'>
          <CardSwiper data={data?.data} />
        </div>
      </div>
    )
  }
  else{
    return null

  }
  

}

export default Highlight