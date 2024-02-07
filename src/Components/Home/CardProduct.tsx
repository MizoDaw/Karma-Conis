// import React, { useState } from 'react';
// import {  Rate, Skeleton, Tooltip } from 'antd';
// import { EyeFilled, HeartFilled, PlusOutlined } from '@ant-design/icons';
// import { TProduct } from '../../Layout/app/Types';
// import { Currency, UserImageURL } from '../../Layout/app/Const';
// import useLoadingState from '../../Hooks/useLoadingState';
// import { Link } from 'react-router-dom';
// import { BaseURL } from '../../api/config';
// import useImageError from '../../Hooks/useImageError';
// import { useTranslation } from 'react-i18next';
// import { useAddToCart } from '../../api/cart';



// const CardProduct= ({ item }:any) => {
//   const [loading, resetLoading] = useLoadingState(true, 2000);
//   const {i18n} = useTranslation()
//   const {mutate} = useAddToCart()

//   console.log(item);

//   return (
//           <Skeleton className='unset' loading={loading} active >
          

//                     <div key={item?.id} className='Card_Product'>
//           <div className='product_icons'>
//             <Link className='eye_product' to={`/product/${item.id}`}>
//               <EyeFilled  />
//             </Link><br/>
//             {/* <HeartFilled /> */}
//           </div>

//               <div className='Card_Product_Top'>
                
//               </div>
//               <div className='Card_Product_Mid'>
//                 <img src={ BaseURL +item?.product_main_image|| UserImageURL} onError={useImageError} alt={item?.name} width="100%" height="60%" />
//               </div>
//               <div className='Card_Product_Bottom'>
//                 <div>Name : {(item?.product_translations?.at(0).name)}

//                 </div>
//                 <span>
//                   <div>
//                     <strong>
//                      Price : {item?.product_price} {Currency}
//                     </strong>
//                     <p>
//                       Quantity :
//                       {item.product_quantity}
//                     </p>
//                   </div>
//                   <div className='AddProduct'>
//                     <Tooltip title="Add To Cart">
//                       <PlusOutlined  onClick={()=>mutate({
//                           product_id:item?.id,
//                           quantity:1
//                       })
//                       } />
//                     </Tooltip>
//                   </div>
//                 </span>
//               </div>
//             {/* </Card> */}
//             </div>

//           </Skeleton>
//   );
// };

// export default CardProduct;


import React, { useState } from 'react';
import {  Rate, Skeleton, Tooltip } from 'antd';
import { EyeFilled, HeartFilled, PlusOutlined } from '@ant-design/icons';
import { TProduct } from '../../Layout/app/Types';
import { Currency, UserImageURL } from '../../Layout/app/Const';
import useLoadingState from '../../Hooks/useLoadingState';
import { Link } from 'react-router-dom';
import { BaseURL, BaseURL_IMAGE } from '../../api/config';
import useImageError from '../../Hooks/useImageError';
import { useTranslation } from 'react-i18next';
import { useAddToCart } from '../../api/cart';
import { toast } from 'react-toastify';
import { useAddToFavourite, useRemoveFromFav } from '../../api/wishlist';
import { PiHeartBreakFill } from "react-icons/pi";
import { useAuth } from '../../Hooks/useAuth';
import {useNavigate} from  'react-router-dom';

const CardProduct = ({ item }:any) => {
  const [loading, resetLoading] = useLoadingState(true, 2000);

  const navigate = useNavigate()
    const {isAuthenticated} = useAuth()
    const {i18n, t} = useTranslation()
    const {mutate} = useAddToCart()
    const {mutate:mutateAddFav} = useAddToFavourite()
    const {mutate:mutateRemoveFav} = useRemoveFromFav()

  return (
          <Skeleton className='unset' loading={loading} active >
                    <div key={item?.id} className='Card_Product'>

            {/* <Card className='unset' loading={loading}> */}
              <div className='Card_Product_Top' onClick={()=>navigate(`/product/${item.id}`)}>
                <span className='Left'>{item?.category?.category_translations?.at(0)?.name}</span>
                <span className='Right'>
               <Link to={`/product/${item.id}`}>
                  <EyeFilled className='SingleOrder_icon' />
                </Link>
                  {/* <HeartFilled className='AddFav_icon' onClick={()=>{mutateAddFav({
                          product_id:item?.id,
                      })
                      toast.success(t("added to favourite"))
                      }}/> */}
                 {/* <PiHeartBreakFill className='RemoveFav_icon' onClick={()=>{mutateRemoveFav({
                          product_id:item?.id,
                      })
                      toast.success(t("Removed From Favourite"))
                      }}/>      */}
                </span>
              </div>
              <div className='Card_Product_Mid' onClick={()=>navigate(`/product/${item.id}`)}>
                <img src={ BaseURL_IMAGE +item?.product_main_image|| UserImageURL} onError={useImageError} alt={item?.name} width="100%" height="60%" />
              </div>
              <div className='Card_Product_Bottom'  >
                <div onClick={()=>navigate(`/product/${item.id}`)}>{item?.product_translations?.at(0)?.name}</div>
                {/* <div>
                  <Rate allowHalf disabled defaultValue={item?.rate} />
                </div> */}
                <span>
                  <div>
                    <strong onClick={()=>navigate(`/product/${item.id}`)}> 
                      {item?.product_price} {Currency}
                    </strong>
                    {/* <small>
                      {Number(item?.product_price) + Number(item?.product_price) * 10 / 100}
                      {Currency}
                    </small> */}
                  </div>
                  {
                    isAuthenticated&&
                  <div className='AddProduct' onClick={()=>{
                    mutate({
                      product_id:item?.id,
                      quantity:1
                    })
                    toast.success('added to cart')
                  }}>
                    <Tooltip title={t("Add To Cart")}>
                      <PlusOutlined />
                    </Tooltip>
                  </div>
                } 
                </span>
              </div>
            {/* </Card> */}
            </div>

          </Skeleton>
  );
};

export default CardProduct;

