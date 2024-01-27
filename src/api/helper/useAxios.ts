import axios from 'axios'
import { BaseURL } from '../config'
import { TOKEN_KEY } from '../../config/AppKey'
import useLangCode from '../../Hooks/useLangCode'
import { useTranslation } from 'react-i18next'
function useAxios() {
  const code  = useLangCode()
  const {i18n} = useTranslation()

    console.log(i18n.language);
    console.log("lang from storage",localStorage.getItem('language'));
    
    // const moaz = 
  
  return (
    axios.create({
        baseURL:BaseURL,
        headers:{
          Authorization:"Bearer " + localStorage.getItem(TOKEN_KEY),
          'language' : localStorage.getItem('language') 
        }
    })
  )
}

export default useAxios

// import axios from 'axios';
// import { BaseURL } from '../config';
// import { TOKEN_KEY } from '../../config/AppKey';
// import useLangCode from '../../Hooks/useLangCode';
// import { useTranslation } from 'react-i18next';



// function useAxios() {
//   const code = useLangCode();
//   const { i18n } = useTranslation();
  

//   const axiosInstance = axios.create({
//     baseURL: BaseURL,
//     headers: {
//       Authorization: "Bearer " + localStorage.getItem(TOKEN_KEY),
//     }
//   });

//   // Add an interceptor to dynamically set the language header for each request
//   axiosInstance.interceptors.request.use((config) => {
//     config.headers['language'] = localStorage.getItem('language') || i18n.language;
//     return config;
//   });

//   return axiosInstance;
// }

// export default useAxios;