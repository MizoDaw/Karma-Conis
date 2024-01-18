import React, { useState } from 'react'
import Layout from '../../Layout/app/Layout'
import { Product, ProductSectionData2  } from '../../Pages/Home/HomeData'
import { Button, Collapse, CollapseProps, ColorPicker, Radio, RadioChangeEvent, Rate } from 'antd'
import { Currency } from '../../Layout/app/Const'
import ProductSection from '../../Components/Home/ProductSection'
import { ProductSectionData } from '../Home/HomeData'
import { useParams } from 'react-router-dom'
import { useGetSingleProduct } from '../../api/Product'
import { BaseURL } from '../../api/config'
import { useAddToCart } from '../../api/cart'

const OneProduct = () => {

  const { id } = useParams()

  const [value, setValue] = useState(1);
  const {data} = useGetSingleProduct({product_id : id})


  const Product =data?.data?.product 
  const  product_highlight = data?.data?.product_highlight
  const product_most_purchase = data?.data?.product_most_purchase
  const {mutate} = useAddToCart()

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
          <img src={BaseURL+ Product?.product_main_image} alt={Product?.name} width="100%" height="60%" />

        </div>
        <div className='Product_Right'>
          <h3>{Product?.product_translations?.at(0)?.name}</h3>
          <div>
            <h6>Category  : </h6> <img  src={BaseURL+ Product?.category?.category_image} style={{width:30, height:30 , borderRadius:"50%" }}/> <h6>{Product?.category?.category_translations?.at(0)?.name}</h6>
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
            <h6>Description  : {Product?.product_translations?.at(0)?.description} </h6>
            {/* <Collapse ghost items={items} /> */}

          </div>
          <div>
            <h6 >Price  : </h6> <h6 className='Price'> {Product?.product_price} {Currency} </h6>
            <br/>
            <h6 >Quantity  : </h6> <h6 className='Price'> {Product?.product_quantity}  </h6>

          </div>

          <div>
          <h6 >Purchasing Count  : </h6> <h6 className='Price'> {Product?.product_purchasing_count}  </h6>

          </div>
          <Button type="primary" block onClick={()=>mutate({
                          product_id:Product?.id,
                          quantity:1
                      })
                      }>
            Add to Cart
          </Button>
        </div>
      </div>
      <ProductSection data={product_highlight} props_product={{
        title:"product Highlight",

        href:'/products'
      }} />
      <ProductSection data={product_most_purchase}  
       props_product={{
        title:"product Most Purchase",

        href:'/products'
      }} />






    </Layout>
  )
}

export default OneProduct