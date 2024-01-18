import axios from 'axios'
import { BaseURL } from '../config'
import { TOKEN_KEY } from '../../config/AppKey'
import useLangCode from '../../Hooks/useLangCode'
import { useTranslation } from 'react-i18next'
function useAxios() {
  const code  = useLangCode()
  console.log(code);
  const {i18n} = useTranslation()
  console.log(i18n.language);

  
  return (
    axios.create({
        baseURL:BaseURL,
        headers:{
          Authorization:"Bearer " + localStorage.getItem(TOKEN_KEY),
          'language' : i18n.language
        }
    })
  )
}

export default useAxios