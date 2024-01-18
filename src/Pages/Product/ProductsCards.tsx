import React from 'react'
import CardProduct from '../../Components/Home/CardProduct'
import { useAllProductsData } from '../../Redux/DispatchData'
import ProductPagination from './ProductPagination'
import { useGetAllProduct } from '../../api/Product'

const ProductsCards = ({ style, setstyle,data }: any) => {

  console.log(data?.data?.data);
  
  return (
    <div className={style ? "ProductsCards" : "ProductsCards2"} >
      {
        data?.data?.data.map((item: any, index: any) => {
          return (
            <div className={style ? "normalCard" : "FullCard"} key={index}><CardProduct item={item} /></div>

          )
        })
      }
      <ProductPagination />



    </div>

  )
}

export default ProductsCards