import React from 'react'
import useImageError from '../../Hooks/useImageError';


const Categories = (item:any,index:any) => {
  console.log(item,"item");
  
  return (
    <div className='Categories'>
      
                <div key={index} className='Categories_Item'>
                    <img   alt=''  src={item?.item?.category_image} onError={useImageError}/>
                    {/* <button  > {item} </button> */}
                </div>
    </div>
  )
}

export default Categories