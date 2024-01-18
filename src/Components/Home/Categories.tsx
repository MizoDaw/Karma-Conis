import React from 'react'
import useImageError from '../../Hooks/useImageError';
import { BaseURL } from '../../api/config';
import { mapTranslatedProperties } from '../../Hooks/mapTranslatedProperties';
import { useTranslation } from 'react-i18next';
import useLangCode from '../../Hooks/useLangCode';
import { useNavigate } from 'react-router-dom';


const Categories = ({item}:any) => {
  const code = useLangCode()
  const navigate = useNavigate()

  return (
    <div className='Categories'>
      
                <div className='Categories_Item' onClick={()=> navigate(`/products?categories_id=${item?.id}`)}>
                    <img   alt=''  src={BaseURL+ item?.category_image} onError={useImageError}/>
                    <button  > {(item?.category_translations.at(0)['name'])} </button>
                </div>
    </div>
  )
}

export default Categories