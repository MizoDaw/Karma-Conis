import React from 'react'
import { Currency } from '../../Layout/app/Const';
import { Button, Divider, Flex, Input } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import { useFormikContext } from 'formik';

const CheckoutForm = ({delivery_fees , sub_total ,setViewPage}:any) => {
  const formikContext = useFormikContext();
  const { values, submitForm } = formikContext;

  const handleSubmit = () => {
    // Execute your logic for handling form submission
    console.log('DetailsBody submitted with values:', values);

    // Proceed to the next step
    setViewPage(1);

    // Manually trigger Formik's submit function
    submitForm();
  };

  return (
    <>
         <div style={{display:"flex" , flexDirection:"column" , alignItems:"flex-start"}}>
              <div style={{display:"flex" , alignItems:"center"}}><p>Sub Total : </p> <p>{sub_total} {Currency}</p></div>
              <div style={{display:"flex" , alignItems:"center"}}><p>Delivery Fees : </p> <p>{delivery_fees} {Currency}</p></div>

              </div>

              <div className='Divider'>  <Divider /></div>
              <div>Total : {sub_total}{Currency}</div>
        

              <div> <Button block type='primary'onClick={handleSubmit}  >Checkout</Button> </div>
    </>
  )
}

export default CheckoutForm