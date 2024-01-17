import React, { useState } from 'react'
import Layout from '../../Layout/app/Layout'
import { Product, ProductSectionData2  } from '../../Pages/Home/HomeData'
import { Button, Collapse, CollapseProps, ColorPicker, Radio, RadioChangeEvent, Rate } from 'antd'
import { Currency } from '../../Layout/app/Const'
import ProductSection from '../../Components/Home/ProductSection'
import { ProductSectionData } from '../Home/HomeData'
import { useParams } from 'react-router-dom'

const OneProduct = () => {

  const { id } = useParams()

  const [value, setValue] = useState(1);

  const onChange = (e: RadioChangeEvent) => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
  };
  const descriptionWords = Product?.description?.split(' ');
  const label = descriptionWords?.slice(0, 3).join(' ');
  const remainingDescription = descriptionWords?.slice(5).join(' ');

  const items: CollapseProps['items'] = [
    {
      key: '1',
      label: label,
      children: <p>{remainingDescription}</p>,
    }
  ];

  return (
    <Layout className='Product'>
      <div className='Product_Info'>
        <div className='Product_Left'>
          <img src={Product?.img} alt={Product?.name} width="100%" height="60%" />

        </div>
        <div className='Product_Right'>
          <h3>{Product?.name}</h3>
          <div>
            <h6>Brand  : </h6> <h6>{Product?.brand}</h6>
          </div>

          {/* <div>

            <h6>Color  : </h6>
            <Radio.Group onChange={onChange} value={value}>
              <Radio value={1}> <ColorPicker defaultValue="red" disabled /> </Radio>
              <Radio value={2}><ColorPicker defaultValue="green" disabled /> </Radio>
              <Radio value={3}><ColorPicker defaultValue="blue" disabled /> </Radio>

            </Radio.Group>
          </div> */}

          <div className='Product_Description'>
            <h6>Description  : </h6>
            <Collapse ghost items={items} />

          </div>
          <div>
            <h6 >Price  : </h6> <h6 className='Price'> {Product?.price} {Currency} </h6>

          </div>
          <div>
          </div>
          <Button type="primary" block>
            Add to Cart
          </Button>
        </div>
      </div>
      <ProductSection data={ProductSectionData} />
      <ProductSection data={ProductSectionData2} />






    </Layout>
  )
}

export default OneProduct