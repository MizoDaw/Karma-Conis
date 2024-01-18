import useAddMutation from "./helper/useAddMutation";



const API = {
    AddToCart:"/api/cart/add_product"
}
export const useAddToCart =  ()=>useAddMutation("CART"  , API.AddToCart )