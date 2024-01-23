import React, { useEffect, useRef, useState } from 'react';
import { Button, Input, Form } from 'antd';
import { Field, useFormikContext } from 'formik';
import Default from './Default';

const DetailsBody = ({ setViewPage }: any) => {
  const formikContext = useFormikContext();
  const { values, submitForm, isValid } = formikContext;
  const [IsV, setIsV] = useState(false)
  const handleSubmit =  () => {
    console.log(IsV, 'IsV');
     submitForm(); 
      if (IsV) {
        setViewPage(2);
      } else {
        console.log(isValid,"isValid");
      }
  };
  
  const isFirstRender = useRef<any>(true);

  useEffect(() => {
         //@ts-ignore 
    if (values?.phone !== '') {
      setIsV(isValid);
      console.log(isValid, 'isValid');
    } else {
      isFirstRender.current = false;
    }
  }, [isValid]);


  return (
    <div className="DetailsBody">
      <div className="DetailsBody_Left">
        <div className='Address'>
          <h5>Shipping Address</h5>
          <div>
            <Default name='phone' placeholder="phone"   />
            <Default name='zone' placeholder="Zone Number"   />
          </div>
          <div>
            <Default name='building' placeholder="Building Number"   />
          </div>
          <div>
            <Default name='note' placeholder="Note"  />
          </div>
          <div>
            <Button type="dashed" block onClick={() => setViewPage(0)}>
              Back to cart
            </Button>
            <Button onClick={handleSubmit} className='primary' type="primary" block>
              Proceed To Payment
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsBody;
