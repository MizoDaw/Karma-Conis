import React, { useState } from 'react'
import Layout from '../../Layout/app/Layout'

import { Spin } from 'antd';
import OrdersForm from './OrdersForm';

const Orders = () => {

  

  return (
    <Layout className='Orders'>
     <OrdersForm/>
    </Layout>
  )
}

export default Orders

