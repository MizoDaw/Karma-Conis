import React from 'react';
import { Space, Table, Tag } from 'antd';
import type { TableProps } from 'antd';
import { useGetAllOrders } from '../../api/orders';

interface DataType {
  id: string;
  order_code: string;
  order_total: number;
  payment_status: string; // Update the type to a single string value
  order_status: string;
}

const columns: TableProps<DataType>['columns'] = [
  {
    title: 'order_code',
    dataIndex: 'order_code',
    key: 'order_code',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'order_total',
    dataIndex: 'order_total',
    key: 'order_total',
  },
  {
    title: 'payment_status',
    dataIndex: 'payment_status',
    key: 'payment_status',
    render: (paymentStatus) => {
      let color = paymentStatus === 'paid' ? 'green' : 'volcano';
      if (paymentStatus === 'pending') {
        color = 'geekblue';
      }
      return (
        <Tag color={color} key={paymentStatus}>
          {paymentStatus.toUpperCase()}
        </Tag>
      );
    },
  },
  {
    title: 'order_status',
    key: 'order_status',
    dataIndex: 'order_status',
    render: (orderStatus) => {
      let color = orderStatus === 'delivered' ? 'green' : 'volcano';
      if (orderStatus === 'pending') {
        color = 'geekblue';
      }
      return (
        <Tag color={color} key={orderStatus}>
          {orderStatus.toUpperCase()}
        </Tag>
      );
    },
  },
];

const OrdersForm = () => {
  const { data } = useGetAllOrders();
  console.log(data?.data);


  return (
    <>
      <div className='Header'> Your All Order total is :  {data?.data?.order_all_total} </div>
    <Table columns={columns} dataSource={data?.data?.order} />;
    </>
  )
};

export default OrdersForm;
