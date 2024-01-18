import React from 'react'
import { Currency } from '../../Layout/app/Const';
import { Button, Divider, Flex, Input } from 'antd';
import TextArea from 'antd/es/input/TextArea';

const CheckoutForm = ({delivery_fees , sub_total ,setViewPage}:any) => {
    const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        console.log('Change:', e.target.value);
      };
    
      const handleChange = (value: string) => {
        console.log(`selected ${value}`);
      };
  return (
    <>
         <div style={{display:"flex" , flexDirection:"column" , alignItems:"flex-start"}}>
              <div style={{display:"flex" , alignItems:"center"}}><p>Sub Total : </p> <p>{sub_total} {Currency}</p></div>
              <div style={{display:"flex" , alignItems:"center"}}><p>Delivery Fees : </p> <p>{delivery_fees} {Currency}</p></div>

              </div>

              <div className='Divider'>  <Divider /></div>
              <div>Total : {sub_total}{Currency}</div>
        

              <div> <Button block type='primary' onClick={()=>setViewPage(1)} >Checkout</Button> </div>
    </>
  )
}

export default CheckoutForm