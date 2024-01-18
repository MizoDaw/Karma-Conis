import { AppstoreOutlined, BarsOutlined } from '@ant-design/icons'
import { Select } from 'antd'
import React, { useState } from 'react'
import ProductsFilter from './ProductsFilter';
import { useNavigate, useParams } from 'react-router-dom';

const ProductsHeader = ({style,setstyle,data}:any) => {
     const handleChange = (value: any) => {
    setShort((prevFilter:any) => ({ ...prevFilter, Shortby: value?.target.value }));

  };
  const navigate = useNavigate();
  const { category: paramCategory } = useParams();
  const [Short, setShort] = useState<any>({
    Shortby: paramCategory || 'jack'
  });

  
  const handleShortChange = (e: any) => {
  };
  return (
 <div className='Products_Header'>

        <div className='Products_Header_Right'>
          {/* <div className='Shortby'>Short by:</div>
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
            /> </div> */}
                      <div>View:</div>
                      <div className={ style ? "secondary" : ""} onClick={()=>setstyle(true)} ><AppstoreOutlined /></div>

                      <div className={ style ? "" : "secondary"} onClick={()=>setstyle(false)} ><BarsOutlined /></div>

        </div>
      </div>  )
}

export default ProductsHeader