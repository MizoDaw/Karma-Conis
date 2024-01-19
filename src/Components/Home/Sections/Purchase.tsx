import React from 'react'
import SubTitle from '../SubTitle'
import CardSwiper from '../CardSwiper'
import { FaDollarSign, FaMoneyBillAlt } from 'react-icons/fa'

const Purchase= (data:any) => {
  const {  href, count, icon } = data
  const TitleProps = { title:"Purchase", href:"/products?is_most_purchased=true", count:"", icon:<FaDollarSign/> }
    
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

export default Purchase