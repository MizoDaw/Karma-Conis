import React from 'react'
import DetailsForm from './DetailsForm';
import { Button, Input } from 'antd';
const DetailsBody = ({setViewPage}:any) => {

  return (
    <div className="DetailsBody">
          <div className="DetailsBody_Left">

            <div className='Address'>
              <h5>Shipping Address</h5>
           <div>
              <Input name='username' placeholder="username" />
              <Input placeholder="Basic usage" />
           </div>
           <div>
                   <Input placeholder="Basic usage" />
                 <Input placeholder="Basic usage" />
           </div>
           <div>
                   <Input placeholder="Basic usage" />
                 <Input placeholder="Basic usage" />
           </div>
           <div>
                 <Input placeholder="Basic usage" />
           </div>
           <div>
           <Button type="dashed" block onClick={()=>setViewPage(0)} >
      back to cart
    </Button>
         <Button onClick={()=>setViewPage(2)} className='primary' type="primary" block>
      proceed To Payment
    </Button>
    

           </div>
            </div>

           </div>
            <div className='DetailsBody_Right'>
             <DetailsForm/>
            </div>
    </div>
  )
}

export default DetailsBody