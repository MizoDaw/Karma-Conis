import {
  CloseOutlined,
  MinusCircleOutlined,
  PlusCircleFilled,
} from '@ant-design/icons';
import React, { useState } from 'react';
import { Card, Skeleton, Popconfirm, Button, Tooltip } from 'antd';
import useLoadingState from '../../Hooks/useLoadingState';
import { TProduct } from '../../Layout/app/Types';
import { Currency } from '../../Layout/app/Const';
import { BaseURL, BaseURL_IMAGE } from '../../api/config';
import { useTranslation } from 'react-i18next';

interface CartItemProps {
  item: any;



}


const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const [loading, resetLoading] = useLoadingState(true, 2000);
  const [counter, setCounter] = useState<number>(item.quantity);
  const [price, setPrice] = useState<number>(Number(item.product.product_price));

  const {t} = useTranslation();
  const handleIncrement = () => {
    setCounter((prevCounter) => prevCounter + 1);
    setPrice((prevPrice) => prevPrice + OnePrice);
  };

  const handleDecrement = () => {
    if (counter > 1) {
      setCounter((prevCounter) => prevCounter - 1);
      setPrice((prevPrice) => prevPrice - OnePrice);
    }
  };

  let  OnePrice = Number(item.product.product_price) / item.quantity;

  

  return (
    <div className='CartItem'>
      <Skeleton loading={loading} active avatar style={{ marginTop: 22 }}>
        <Card loading={loading}>
          <span className='Cart_Img'>
            <img
              alt=''
              style={{ objectFit: 'contain' }}
              src={BaseURL_IMAGE + item.product.product_main_image}
            />
          </span>
          <span className='Cart_Info' style={{ marginInline: '10px' }}>
            <h5>{item?.product?.product_translations?.at(0)?.name}</h5>
            <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around' }}>
              <img
                style={{ borderRadius: '50%', width: 30, height: '30', marginRight: '10px' }}
                src={BaseURL_IMAGE + item.product.category?.category_image}
              />
              <h6>{item.product?.category?.category_translations?.at(0)?.name}</h6>
            </span>
            <strong>
               {t("Price")} : {Currency}
              {price.toFixed(2)}
            </strong>
            <p> {t("Quantity")} :{counter} </p>
          </span>
          <span className='Card_Counter'>
            <Button shape='circle' icon={<PlusCircleFilled />} onClick={handleIncrement} />
            <div className='Counter'>{counter}</div>
            <Button shape='circle' icon={<MinusCircleOutlined />} onClick={handleDecrement} />
          </span>
          <span className='Cart_Delete'>
            <Popconfirm title={t("Delete the Item")} description={t("Are you sure to delete this Item")+"?"} okText={t("Yes")} cancelText={t("No")}>
              <Tooltip title={t("Delete")} placement='bottom'>
                <Button shape='circle' icon={<CloseOutlined />} danger />
              </Tooltip>
            </Popconfirm>
          </span>
        </Card>
      </Skeleton>
    </div>
  );
};

export default CartItem;
