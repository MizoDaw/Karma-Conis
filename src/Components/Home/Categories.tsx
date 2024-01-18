import React from 'react'
import useImageError from '../../Hooks/useImageError';
import { UserImageURL } from '../../Layout/app/Const';


const Categories = (item:any,index:any) => {

  
  return (
    <div className='Categories'>
      
                <div key={index} className='Categories_Item'>
                    <img   alt=''  src={item?.item?.category_image || UserImageURL} onError={useImageError}/>
                    {/* <button  > {item} </button> */}
                </div>
    </div>
  )
}

export default Categories