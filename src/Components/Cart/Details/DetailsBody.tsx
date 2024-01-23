import React, { useState } from 'react';
import { Button, Input, Form } from 'antd';
import { ErrorMessage, Field, useFormikContext } from 'formik';
import InputCart from './InputCart';
import { object } from 'yup';

const DetailsBody = ({ setViewPage }: any) => {
  const formikContext = useFormikContext();
  const { values, submitForm } = formikContext;

  
  const handleSubmit = () => {
    // Execute your logic for handling form submission

    // Proceed to the next step
    
    // Manually trigger Formik's submit function
    submitForm();

    setTimeout(()=>{

      if(isEmpty(formikContext.errors)){
        
        setViewPage(2);
      }
    },500)
  };

  return (
    <div className="DetailsBody">
      <div className="DetailsBody_Left">
          <div className='Address'>
            <h5>Shipping Address</h5>
            <div>
              <InputCart 
              name='phone'/>
              <InputCart  name='zone' placeholder="Zone Number" type='number' />
            </div>
            <div>
              <InputCart  name='building' placeholder="Building Number"  type='number'/>
            </div>
            <div>
              <InputCart  name='note' placeholder="Note"  />
            </div>
            <div>
              <Button type="dashed" block onClick={() => setViewPage(0)}>
                Back to cart
              </Button>
              <Button onClick={handleSubmit} className='primary' type="primary" block onSubmit={handleSubmit}>
                Proceed To Payment
              </Button>
            </div>
          </div>
      </div>
    </div>
  );
};

export default DetailsBody;
function isEmpty(obj:object) {
  return Object.keys(obj).length === 0;
}