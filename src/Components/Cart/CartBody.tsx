import { useCartData } from '../../Redux/DispatchData';
import CartItem from './CartItem'
import CheckoutForm from './CheckoutForm';


const CartBody = ({data}:any) => {


   return (
    <div className="CartBody">
            <div className="CartBody_Left">
            { data?.map((item:any ,index:number)=>{
            return(
          <div key={index}>  <CartItem item={item}/> </div>
           ) })  }
           </div>
            <div className='CartBody_Right'>
             <CheckoutForm/>
            </div>
    </div>
  )
}

export default CartBody