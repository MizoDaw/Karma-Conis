import useAddMutation from "./helper/useAddMutation"
import useDeleteMutation from "./helper/useDeleteMutation"
import useGetQuery from "./helper/useGetQuery"
import useUpdateMutation from "./helper/useUpdateMutation"



const API = {
    
    GET:"/api/user/product/getAll",
    GETONE:"/api/user/product/getOne",


}

const KEY = "PRODUCT"

export const useGetAllProduct = (params?:any) => useGetQuery(KEY , API.GET, params)

export const useGetSingleProduct = (params?:any) => useGetQuery(KEY , API.GETONE, params)