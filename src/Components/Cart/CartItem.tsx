import {  CloseOutlined, MinusSquareOutlined, PlusSquareOutlined } from '@ant-design/icons';
import React, { useState } from 'react';
import {  Card, Skeleton ,Popconfirm,Button, Tooltip} from 'antd';
import useLoadingState from '../../Hooks/useLoadingState';
import { TProduct } from '../../Layout/app/Types';
import { Currency } from '../../Layout/app/Const';
import { BaseURL, BaseURL_IMAGE } from '../../api/config';



interface CartItemProps {
  item: Product;
}
const CartItem: React.FC <CartItemProps> = ({item}) => {
  console.log(item);
  
  const [loading, resetLoading] = useLoadingState(true, 2000);
  const [Counter, setCounter] = useState<number>(1);
  const [Price, setPrice] = useState<number>(210);

  return (
    <div className='CartItem'>
      <Skeleton loading={loading} active avatar  style={{ marginTop: 22 }}>
      <Card loading={loading}>
   
      <span className='Cart_Img'>
      <img alt=''  style={{objectFit:"contain"}} src={BaseURL_IMAGE+item.product.product_main_image}   />
      </span>
      <span className='Cart_Info' style={{marginInline:"10px"}}>
        <h5> {item?.product?.product_translations?.at(0)?.name} </h5>
        <span style={{display:"flex" , alignItems:"center", justifyContent:"space-around"}}>

        <img style={{borderRadius:"50%", width:30 , height:'30', marginRight:"10px"}} src={BaseURL_IMAGE + item.product.category?.category_image}  /> <h6>  {item.product?.category?.category_translations?.at(0)?.name} </h6>

        </span>
        <strong>Price : {Currency}{item.product.product_price} </strong> 
        <p> Quantity :{item.quantity} </p> 

      </span>
      {/* <span className='Cart_Counter'>
        <Button  shape="circle" icon={<PlusSquareOutlined />} onClick={()=>{setCounter(v => ++v) ; setPrice(v=> 2 * v )} } />
        <div className='Counter'>
          {Counter}
        </div>
        <Button  shape="circle" icon={<MinusSquareOutlined />} onClick={()=>{setCounter(v => v > 1 ? --v : v) ;setPrice(v=> Counter > 1 ? v/2 : v )}} />
      </span> */}
      <span className='Cart_Delete'>
      <Popconfirm
    title="Delete the Item"
    description="Are you sure to delete this Item?"
    okText="Yes"
    cancelText="No"
  >
      <Tooltip title="Delete" placement="bottom" >

    <Button shape="circle" icon={<CloseOutlined />}  danger/>
    </Tooltip>

  </Popconfirm>
      </span>
      </Card>
      </Skeleton>

    </div>
  );
};

export default CartItem;


interface CategoryTranslation {
  id: number;
  category_id: number;
  locale: string;
  name: string;
}

interface Category {
  id: number;
  is_active: boolean;
  level: number;
  category_translations:CategoryTranslation[]
  parent_id: null | number;
  category_image:string 
}

interface ProductTranslation {
  id: number;
  product_id: number;
  name: string;
  description: string;
  locale: string;
}

interface Product {
  product_id: number;
  quantity: number
  id:number ,
  cart_id:number
  product:MainObject
}

interface MainObject {
  cart_id: number;
  id: number;
  product: string;
  category: Category;
  category_image: string;
  product_main_image: string;
  product_price: string;
  product_purchasing_count: number;
  product_quantity: number;
  product_translations: ProductTranslation[];
}
