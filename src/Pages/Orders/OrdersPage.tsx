import React, { useState } from 'react'
import Layout from '../../Layout/app/Layout'

import { Spin } from 'antd';
import OrdersForm from './OrdersForm';
import { useGetAllOrders } from '../../api/orders';
import LoadingPage from '../Loading/LoadingPage';
import NotFoundPage from '../../Layout/app/NotFoundPage';

const Orders = () => {

  const { data , isLoading , isError} = useGetAllOrders();



  if(isLoading){
    return <LoadingPage/>
  }
  if(isError){
    return <NotFoundPage/>
  }
  
  return (
    <Layout className='Orders'>
     <OrdersForm data={data}/>
    </Layout>
  )
}

export default Orders

