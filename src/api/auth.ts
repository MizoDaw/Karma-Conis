import useAddMutation from "./helper/useAddMutation"




const API = {
    login:"/api/user/login",
    register:"/api/user/register",
    
}


export const useLogin = ()=>useAddMutation("AUTH" , API.login)