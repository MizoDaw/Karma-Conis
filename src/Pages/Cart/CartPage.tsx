import React, { useState, memo } from 'react';
import { Formik, Form } from 'formik';
import Layout from '../../Layout/app/Layout';
import StepsUi from '../../Components/Cart/StepsUi';
import CartBody from '../../Components/Cart/CartBody';
import DetailsBody from '../../Components/Cart/Details/DetailsBody';
import PaymentBody from '../../Components/Cart/Payment/PaymentBody';
import ReviewBody from '../../Components/Cart/Review/ReviewBody';
import { useGetCart } from '../../api/cart';

const CartPage: React.FC = () => {
  const [ViewPage, setViewPage] = useState<number>(0);
  const propsState = { ViewPage, setViewPage };
  const { data } = useGetCart();

  const MemoizedStepsUi = memo(() => {
    return <StepsUi {...propsState} />;
  });

  const RenderPageContent = memo(() => {
    switch (ViewPage) {
      case 0:
        return <CartBody {...propsState} />;
      case 1:
        return <DetailsBody {...propsState} />;
      case 2:
        return <PaymentBody {...propsState} />;
      case 3:
        return <ReviewBody {...propsState} />;
      default:
        return null;
    }
  });
  const handleSubmit = (values: any, actions: any) => {
  };


  return (
    <Layout className='CartPage'>
      <Formik
        initialValues={{
          cartItems: data?.data?.at(0)?.cart_items || [],
          phone: localStorage.getItem('PHONE_CHECK_OUT') || '',
          zone: localStorage.getItem('ZONE_CHECK_OUT') || '',
          building: localStorage.getItem('BUILDING_CHECK_OUT') || '',
          note: localStorage.getItem('NOTE_CHECK_OUT') || '',
          payment_method: "",
          lat: "36.480",
          long: "36.848"

        }}
        onSubmit={handleSubmit}
      >
        <Form>
          <MemoizedStepsUi />
          <RenderPageContent />
        </Form>
      </Formik>
    </Layout>
  );
};

export default CartPage;
