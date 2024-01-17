import {  CloseOutlined, MinusSquareOutlined, PlusSquareOutlined } from '@ant-design/icons';
import React, { useState } from 'react';
import {  Card, Skeleton ,Popconfirm,Button, Tooltip} from 'antd';
import useLoadingState from '../../Hooks/useLoadingState';
import { TProduct } from '../../Layout/app/Types';
import { Currency } from '../../Layout/app/Const';



interface CartItemProps {
  item: TProduct;
}
const CartItem: React.FC <CartItemProps> = ({item}) => {
  const [loading, resetLoading] = useLoadingState(true, 2000);
  const [Counter, setCounter] = useState<number>(1);
  const [Price, setPrice] = useState<number>(210);

  return (
    <div className='CartItem'>
      <Skeleton loading={loading} active avatar  style={{ marginTop: 22 }}>
      <Card loading={loading}>
   
      <span className='Cart_Img'>
      <img alt=''  src='../Product/Product.jng'   />
      </span>
      <span className='Cart_Info'>
        <h5> Silver High Neck Sweater </h5>
        <h6>  Neck Sweater </h6>
        <strong> {Currency}{Price}.00 </strong> 
      </span>
      <span className='Cart_Counter'>
        <Button  shape="circle" icon={<PlusSquareOutlined />} onClick={()=>{setCounter(v => ++v) ; setPrice(v=> 2 * v )} } />
        <div className='Counter'>
          {Counter}
        </div>
        <Button  shape="circle" icon={<MinusSquareOutlined />} onClick={()=>{setCounter(v => v > 1 ? --v : v) ;setPrice(v=> Counter > 1 ? v/2 : v )}} />
      </span>
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