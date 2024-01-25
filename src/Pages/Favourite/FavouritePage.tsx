import Layout from '../../Layout/app/Layout'
import { useGetFav } from '../../api/wishlist'
import { useTranslation } from 'react-i18next'
import React from 'react';
import { Spin } from 'antd';
import CardProduct from '../../Components/Home/CardProduct';
import ProductPagination from '../Product/ProductPagination';

const FavouritePage = ({ style, setStyle,  isLoading }: any) => {

  const {t} = useTranslation();

  const {data}  = useGetFav()

  console.log(data);
  
  return (
    <Layout className='WishList'>
      <h1 className="WishList_Header">
          {t("My WishList")} :
      </h1>

    <div className={style ? 'ProductsCards' : 'ProductsCards'}>
      {isLoading ? (
        <Spin />
      ) : (
        data?.data?.map((item: any, index: any) => (
          <div className={style ? 'normalCard' : 'RemoveFavCard'} key={index}>
            <CardProduct item={item} />
          </div>
        ))
      )}
      <ProductPagination data={data?.pagination} />
    </div>

    </Layout>
  )
}

export default FavouritePage