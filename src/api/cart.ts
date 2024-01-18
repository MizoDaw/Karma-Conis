import { TOKEN_KEY } from "../config/AppKey";
import useAddMutation from "./helper/useAddMutation";
import useGetQuery from "./helper/useGetQuery";



const API = {
    AddToCart:"/api/cart/add_product",
    GET:"/api/cart/details"
}
export const useAddToCart =  ()=>useAddMutation("CART"  , API.AddToCart )
export const useGetCart =  ()=>useGetQuery("CART"  , API.GET  ,{} , {
    enabled:localStorage.getItem(TOKEN_KEY) ? true :false
})