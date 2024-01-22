import React, { useEffect, useState } from 'react'
import PaymentForm from './PaymentForm';
import { Button, Divider, Input, Radio, Space } from 'antd';
import { useCheckout } from '../../../api/cart';
import { useFormikContext } from 'formik';
interface ValuesType {
  building: string,

lat: string ,
long: string ,
note: string , 
payment_method: string,
phone : string,
zone: string,

}
const PaymentBody = ({ setViewPage }: any) => {
  const formikContext = useFormikContext();
  const {values, setFieldValue, submitForm } = formikContext;

  const handleSubmit = () => {
      const data = values as ValuesType
      mutate({
        ...(data as object),
        zone_number:+data?.zone,
        'payment_method': 'cash_on_delivery',
      })
      
   
  };

  const [selectedValue, setSelectedValue] = useState(1);

  const {mutate , isLoading , isSuccess , data , status } = useCheckout()
  const handleChange = (value: any) => {
    setSelectedValue(value);
    setFieldValue('payment_method', 'cash_on_delivery'); // Set the value in Formik

  };

  useEffect(()=>{
    console.log(isSuccess);
    
    if(isSuccess){
      console.log(isSuccess , "OORRR");
        setViewPage(3)
        submitForm();

      }
  },[isSuccess])

  type TRadioUi = { value: number; title: string, className?: string; children: React.ReactNode }
  const RadioUi = ({ value, children, title, className }: TRadioUi) => {
    return (
      <div>
        <Radio
          value={value}
          checked={selectedValue === value}
          onChange={() => handleChange(value)}

        >
          <span>{title} </span>
        </Radio>
        {selectedValue === value && <div className={className}>{children}  </div>}
              <Divider />

      </div>
    )
  }
  return (
    <div className="PaymentBody">
      <div className="PaymentBody_Left">
        <Space direction='vertical' >
          <RadioUi   value={3} title="Cash On Delivery" >
              <></>
          </RadioUi>
        </Space>
       <div>
           <div className='Buttons_Tr'>
            <Button type="dashed" block onClick={()=>setViewPage(1)} >
      back to Details
    </Button>
         <Button onClick={handleSubmit} className='primary' type="primary" block>
      {isLoading? "Loading ... " :"Review"}
    </Button>
           </div>
    

           </div>
      </div>
      {/* <div className='PaymentBody_Right'>
        <PaymentForm />
      </div> */}
    </div>
  )
}

export default PaymentBody