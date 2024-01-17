import React, { useState, memo } from 'react';
import Layout from '../../Layout/app/Layout';
import StepsUi from '../../Components/Cart/StepsUi';
import CartBody from '../../Components/Cart/CartBody';
import DetailsBody from '../../Components/Cart/Details/DetailsBody';
import PaymentBody from '../../Components/Cart/Payment/PaymentBody';
import ReviewBody from '../../Components/Cart/Review/ReviewBody';




const CartPage: React.FC = () => {

  const [ViewPage, setViewPage] = useState<number>(0);
  const propsState = {ViewPage,setViewPage}     
  const MemoizedStepsUi = memo(({}) => {
    return <StepsUi {...propsState} />
  } );

const RenderPageContent = memo(({ ViewPage}:any) => {
  switch (ViewPage) {
    case 0:
      return <CartBody />;
    case 1:
      return <DetailsBody  {...propsState} />;
    case 2:
      return <PaymentBody {...propsState}  />;
    case 3:
      return <ReviewBody {...propsState}  />;
    default:
      return null;
  }
});
  return (
    <Layout className='CartPage'>
      <MemoizedStepsUi {...propsState}/>
      <RenderPageContent {...propsState}/>
    </Layout>
  );
};

export default CartPage;
