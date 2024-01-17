import React, { useState } from 'react';
import { Divider, Steps } from 'antd';
interface StepsUiProps {
  setViewPage: React.Dispatch<React.SetStateAction<number>>;
  ViewPage:number
}
const StepsUi: React.FC <StepsUiProps>= ({ViewPage,setViewPage}) => {
  const [current, setCurrent] = useState(ViewPage);
    console.log(current);
  const onChange = (value: number) => {
    setViewPage(value)
    setCurrent(value);
  };

  return (
    <div       className='StepsUi' >
      <Steps
        current={current}
        onChange={onChange}
        items={[
          {
            title: 'CartInfo',
            description:"CheckOut",
          },
          {
            title: 'Details',
            description:"Billing Address",
          },
          {
            title: 'Payment',
            description:"Pay with",
          },
          {
            title: 'Review',
            description:"Rate Us",
          }
        ]}
      />

      <Divider />

     
    </div>
  );
};

export default StepsUi;