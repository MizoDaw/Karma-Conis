import { Divider, InputNumber, Rate, Select } from 'antd'
import React, { useState } from 'react';
import type { RadioChangeEvent } from 'antd';
import {  Radio, Space } from 'antd';

const ProductsFilter = () => {

const handleChange = (value: string) => {
  console.log(`selected ${value}`);
};
  const [value, setValue] = useState(1);

  // const onChange = (e: RadioChangeEvent) => {
  //   console.log('radio checked', e.target.value);
  //   setValue(e.target.value);
  // };
  const onChangeInput = (value: any) => {
  console.log('changed', value);
};

  return (
    <div className='ProductsFilter'>
      <span className='ProductsFilter_header'>ProductsFilter </span>
      <Divider/> 
      <div className='ProductsFilter_Text'>  Categories   </div>
      
      <div>  <Select
      defaultValue="lucy"
      style={{ width: "100%" }}
      onChange={handleChange}
      options={[  { value: 'jack', label: 'Jack' }, ]} />
       </div>
      <div className='ProductsFilter_Text'>Price Range
    </div>
      <div> 
        <InputNumber min={0} max={1000} defaultValue={0} onChange={onChangeInput} /> {`>`} 
        <InputNumber min={0} max={1000} defaultValue={250} onChange={onChangeInput} />

         </div>
      <Divider/> 

      <Space direction='vertical' >
      <Radio checked className='ProductsFilter_options'>All</Radio>   
        <Radio className='ProductsFilter_options'>Highlight</Radio>
        <Radio className='ProductsFilter_options'>Most Purchased</Radio>   

        </Space>        
               
 <div>

 </div>
    </div>
  )
}

export default ProductsFilter