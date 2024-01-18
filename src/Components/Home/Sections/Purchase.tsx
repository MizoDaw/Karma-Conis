import React from 'react'
import SubTitle from '../SubTitle'
import CardSwiper from '../CardSwiper'

const Purchase= (data:any) => {
  const {  href, count, icon } = data
  const TitleProps = { title:"Purchase", href:"", count:"", icon:"" }
    
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