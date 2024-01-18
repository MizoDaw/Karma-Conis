import useAddMutation from "./helper/useAddMutation";




export const useSendMessage = ()=> useAddMutation('MESSAGE' , "/contact-us/send_message")