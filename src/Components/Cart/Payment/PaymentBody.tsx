import React, { useState } from 'react'
import PaymentForm from './PaymentForm';
import { Button, Divider, Input, Radio, Space } from 'antd';

const PaymentBody = ({ setViewPage }: any) => {

  const [selectedValue, setSelectedValue] = useState(1);

  const handleChange = (value: any) => {
    setSelectedValue(value);
  };

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

          <RadioUi className='credit_card' value={1} title="Pay with credit card" >
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
          </RadioUi>
          <RadioUi value={3} title="Cash On Delivery" >
            
          </RadioUi>
        </Space>
       <div>
           <div className='Buttons_Tr'>
            <Button type="dashed" block onClick={()=>setViewPage(1)} >
      back to Details
    </Button>
         <Button onClick={()=>setViewPage(3)} className='primary' type="primary" block>
      Review
    </Button>
           </div>
    

           </div>
      </div>
      <div className='PaymentBody_Right'>
        <PaymentForm />
      </div>
    </div>
  )
}

export default PaymentBody