import React, { useEffect, useRef, useState } from 'react';
import { Button, Input, Form } from 'antd';
import { ErrorMessage, Field, useFormikContext } from 'formik';
import { object } from 'yup';
import Default from './Default';

const DetailsBody = ({ setViewPage }: any) => {
  const formikContext = useFormikContext();
  const { values, submitForm,isValid } = formikContext;
  const [isV, setIsV] = useState(false);
  const handleSubmit = () => {
    submitForm();
    if (isV) {
      setViewPage(2);
    } else {
      console.error('Form validation failed. Please check the input fields.');
    }
  };

  useEffect(() => {
    //@ts-ignore
    if (values.zone !== "") {
      setIsV(isValid);
      console.log(isValid, 'isValid');
    } else {

    }
  }, [isValid]);



  return (
    <div className="DetailsBody">
      <div className="DetailsBody_Left">
          <div className='Address'>
            <h5>Shipping Address</h5>
            <div>
              <Default 
              name='phone'/>
              <Default  name='zone' placeholder="Zone Number" type='number' />
            </div>
            <div>
              <Default  name='building' placeholder="Building Number"  type='number'/>
            </div>
            <div>
              <Default  name='note' placeholder="Note"  />
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