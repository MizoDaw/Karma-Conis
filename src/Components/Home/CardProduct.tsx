import React, { useState } from 'react';
import {  Rate, Skeleton, Tooltip } from 'antd';
import { EyeFilled, HeartFilled, PlusOutlined } from '@ant-design/icons';
import { TProduct } from '../../Layout/app/Types';
import { Currency } from '../../Layout/app/Const';
import useLoadingState from '../../Hooks/useLoadingState';
import { Link } from 'react-router-dom';


interface CardProductProps {
  item: TProduct;
}

const CardProduct: React.FC<CardProductProps> = ({ item }) => {
  const [loading, resetLoading] = useLoadingState(true, 2000);



  return (
          <Skeleton className='unset' loading={loading} active >
                    <div key={item?.id} className='Card_Product'>

              <div className='Card_Product_Top'>
                <span className='Right'>
               <Link to={`/product/${item.id}`}>
                <EyeFilled />
              </Link>
                  <HeartFilled />
                </span>
              </div>
              <div className='Card_Product_Mid'>
                <img src={item?.img} alt={item?.name} width="100%" height="60%" />
              </div>
              <div className='Card_Product_Bottom'>
                <div>{item?.name}</div>
                <span>
                  <div>
                    <strong>
                      {item?.price} {Currency}
                    </strong>
                    {/* <small>
                      {item?.old_price}
                      {Currency}
                    </small> */}
                  </div>
                  <div className='AddProduct'>
                    <Tooltip title="Add To Cart">
                      <PlusOutlined />
                    </Tooltip>
                  </div>
                </span>
              </div>
            {/* </Card> */}
            </div>

          </Skeleton>
  );
};

export default CardProduct;

