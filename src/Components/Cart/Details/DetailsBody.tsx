import React, { useState } from 'react';
import { Button, Input, Form } from 'antd';
import { Field, useFormikContext } from 'formik';

const DetailsBody = ({ setViewPage }: any) => {
  const formikContext = useFormikContext();
  const { values, submitForm } = formikContext;

  const handleSubmit = () => {
    // Execute your logic for handling form submission
    console.log('DetailsBody submitted with values:', values);

    // Proceed to the next step
    setViewPage(2);

    // Manually trigger Formik's submit function
    submitForm();
  };

  return (
    <div className="DetailsBody">
      <div className="DetailsBody_Left">
        <Form>
          <div className='Address'>
            <h5>Shipping Address</h5>
            <div>
              <Field as={Input} name='phone' placeholder="phone" />
              <Field as={Input} name='zone' placeholder="Zone Number" />
            </div>
            <div>
              <Field as={Input} name='building' placeholder="Building Number" />
            </div>
            <div>
              <Field as={Input} name='note' placeholder="Note" />
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
        </Form>
      </div>
    </div>
  );
};

export default DetailsBody;
