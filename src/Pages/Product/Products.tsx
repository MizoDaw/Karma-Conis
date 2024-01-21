import React, { useState } from 'react'
import Layout from '../../Layout/app/Layout'
import ProductsHeader from './ProductsHeader';
import ProductsFilter from './ProductsFilter';
import ProductsCards from './ProductsCards';
import ProductPagination from './ProductPagination';
import { useGetAllProductWithPaginations } from '../../api/Product';
import { Spin } from 'antd';

const Products = () => {

  const [style, setstyle] = useState(true)
  const { data , isLoading } = useGetAllProductWithPaginations();
  console.log(data);
  
  const Props = { style, setstyle,data ,isLoading }

  return (
    <Layout className='Products'>
      <ProductsHeader {...Props} />
      <div className='Products_Body'>
        <ProductsFilter />
        {isLoading ? <Spin/>  :   <ProductsCards {...Props} /> }

      </div>
    </Layout>
  )
}

export default Products

