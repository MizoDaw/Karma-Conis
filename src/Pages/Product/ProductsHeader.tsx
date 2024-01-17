import { AppstoreOutlined, BarsOutlined } from '@ant-design/icons'
import { Select } from 'antd'
import React from 'react'
import ProductsFilter from './ProductsFilter';

const ProductsHeader = ({style,setstyle}:any) => {
     const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  return (
 <div className='Products_Header'>

        <div className='Products_Header_Right'>
          <div className='Shortby'>Short by:</div>
          <div>
            <Select
              defaultValue="Relevance"
              style={{ width: 120 }}
              onChange={handleChange}
              options={[
                { value: 'Relevance', label: 'Relevance' },
                { value: 'Date', label: 'Date' },
                { value: 'Price To Low', label: 'Price To Low ' },
                { value: 'Price To High', label: 'Price To High' },
              ]}
            /> </div>
                      <div>View:</div>
                      <div className={ style ? "secondary" : ""} onClick={()=>setstyle(true)} ><AppstoreOutlined /></div>

                      <div className={ style ? "" : "secondary"} onClick={()=>setstyle(false)} ><BarsOutlined /></div>

        </div>
      </div>  )
}

export default ProductsHeader