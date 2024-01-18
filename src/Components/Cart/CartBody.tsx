import { useCartData } from '../../Redux/DispatchData';
import CartItem from './CartItem'
import CheckoutForm from './CheckoutForm';


const CartBody = ({data , cart, setViewPage}:any) => {


  console.log(cart);
  
   return (
    <div className="CartBody">
            <div className="CartBody_Left">
            { data?.map((item:any ,index:number)=>{
            return(
          <div key={index}>  <CartItem item={item}/> </div>
           ) })  }
           </div>
            <div className='CartBody_Right'>
             <CheckoutForm sub_total={cart?.sub_total} setViewPage={setViewPage} delivery_fees={cart?.delivery_fees} />
            </div>
    </div>
  )
}

export default CartBody