import React, { useState } from 'react'
import Layout from '../../Layout/app/Layout'
import ProductsHeader from './ProductsHeader';
import ProductsFilter from './ProductsFilter';
import ProductsCards from './ProductsCards';
import ProductPagination from './ProductPagination';
import { useGetAllProduct } from '../../api/Product';

const Products = () => {

  const [style, setstyle] = useState(false)
  const { data } = useGetAllProduct();

  const Props = { style, setstyle,data }

  return (
    <Layout className='Products'>
      <ProductsHeader {...Props} />
      <div className='Products_Body'>
        <ProductsFilter />
          <ProductsCards {...Props} />
      </div>
    </Layout>
  )
}

export default Products