import { useSelector } from "react-redux";
import { TOKEN_KEY } from "../config/AppKey";
import useAddMutation from "./helper/useAddMutation";
import useGetQuery from "./helper/useGetQuery";



const API = {
    AddToCart:"/api/cart/add_product",
    GET:"/api/cart/details",
    CHECK : '/api/order/checkout',
    SINGLE_ORDER:"api/order/details"
}

const  KEY = "CART"
const  KEY2 = "SINGLE_ORDER"

export const useAddToCart =  ()=>useAddMutation(KEY , API.AddToCart )
export const useGetCart =  ()=>{
    const {isAuthenticated} = useSelector((state:any)=>state.auth)
    
    return useGetQuery(KEY  , API.GET  ,{} , {
        enabled:isAuthenticated
    })
}

export const useCheckout = ()=>useAddMutation(KEY , API.CHECK)




export const useGetSingleOrder = (params :any)=>useGetQuery(KEY2 , API.SINGLE_ORDER , params) 