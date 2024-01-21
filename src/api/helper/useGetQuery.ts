import { useQuery } from 'react-query';
import useAxios from './useAxios';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';

function useGetQuery(key: string, url: string , params:any={} , options?:any) {
  const axios = useAxios();
  const navigate  = useNavigate()
  const {t} = useTranslation()
  return useQuery(key, async () => {
  const response = await axios.get(url , {params});
    return response.data; 
  }, {
    onError: (error:any) => {
      if(error.response.status  == 401 || error.response.status == 403){
        toast.error(t('please_login_first'))
        navigate('/auth')
      }

      console.error('An error occurred:', error);
    },
    refetchOnWindowFocus: false,
    
    ...options
    
  });
}

export default useGetQuery;
