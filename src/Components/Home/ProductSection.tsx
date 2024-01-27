import React from 'react'
import SubTitle from './SubTitle'
import CardSwiper from './CardSwiper'
import { TCardProduct } from '../../Layout/app/Types'

type TProductSection = {
  data: TCardProduct 
}

const ProductSection= ({ data  , props_product  } :any) => {
  // console.log(data);
  
  if (data?.length > 0) {
    return (

      <div className='ProductSection'>
        <SubTitle  {...props_product}    />
        <div className='Cards'>
          <CardSwiper data={data} />
        </div>
      </div>
    )
  }
  else{
    return null

  }
  

}

export default ProductSection