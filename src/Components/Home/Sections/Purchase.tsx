import React from 'react'
import SubTitle from '../SubTitle'
import CardSwiper from '../CardSwiper'

const Purchase= (data:any) => {
  const {  href, count, icon } = data
  const TitleProps = { title:"Purchase", href:"/products?is_most_purchased=true", count:"", icon:"" }
    
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