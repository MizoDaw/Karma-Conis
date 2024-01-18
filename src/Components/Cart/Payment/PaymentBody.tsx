import React, { useEffect, useState } from 'react'
import PaymentForm from './PaymentForm';
import { Button, Divider, Input, Radio, Space } from 'antd';
import { useCheckout } from '../../../api/cart';

const PaymentBody = ({ setViewPage }: any) => {

  const [selectedValue, setSelectedValue] = useState(1);

  const {mutate , isLoading , isSuccess , data , status } = useCheckout()
  const handleChange = (value: any) => {
    setSelectedValue(value);
  };


  useEffect(()=>{
    console.log(status ,data);
    
    if(status == 'success'){
    console.log(isSuccess , "OORRR");

      setViewPage(3)
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
          <span>{title}</span>
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

          {/* <RadioUi className='credit_card' value={1} title="Pay with credit card" >
              <div>
              <Input name='username' placeholder="username" />
              <Input placeholder="Basic usage" />
           </div>
           <div>
                   <Input placeholder="Basic usage" />
                 <Input placeholder="Basic usage" />
           </div>
           <div>
            <Button block type='primary' > submite </Button>
           </div>
          </RadioUi>
          <RadioUi value={2} title="Pay with Paypal" className='with_Paypal' >
            <div>
                   <Input placeholder="Basic usage" />
           </div>
             <div>
                 <Input placeholder="Basic usage" />
           </div>
           <div>
            <Button block type='primary' > submite </Button>
           </div>
          </RadioUi> */}
          <RadioUi   value={3} title="Cash On Delivery" >
              <></>
          </RadioUi>
        </Space>
       <div>
           <div className='Buttons_Tr'>
            <Button type="dashed" block onClick={()=>setViewPage(1)} >
      back to Details
    </Button>
         <Button onClick={()=>{
          mutate({
            'payment_method':"cash_on_delivery",
            'zone_number':+(localStorage.getItem("ZONE_CHECK_OUT")|| ""),
            'building_number':localStorage.getItem("BUILDING_CHECK_OUT"),
            lat:"36.480",
            long:"36.848"
          })
          
          }} className='primary' type="primary" block>
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