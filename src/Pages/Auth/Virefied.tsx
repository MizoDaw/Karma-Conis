import React from 'react';
import { Button, Input, Result } from 'antd';

const Virefied: React.FC = () => (
 <div className='Virefied'>
     <Result
     
    status="404"
    title="code Send to your Email Vrrefied it"
    extra={
      <Input placeholder='Verfied'  />
    }
  />
 </div>
);

export default Virefied;