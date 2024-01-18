import useAddMutation from "./helper/useAddMutation"
import useDeleteMutation from "./helper/useDeleteMutation"
import useGetQuery from "./helper/useGetQuery"
import useGetQueryPagination from "./helper/useGetQueryPagination"
import useUpdateMutation from "./helper/useUpdateMutation"



const API = {
    
    GET:"/api/user/product/getAll",

}

const KEY = "PRODUCT"

export const useGetAllProduct = (params?:any) => useGetQuery(KEY , API.GET, params)
export const useGetAllProductWithPaginations = (params?:any) => useGetQueryPagination(KEY, API.GET, params);
