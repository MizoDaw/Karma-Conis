import React from 'react'
import useImageError from '../../Hooks/useImageError';
import { BaseURL } from '../../api/config';
import { mapTranslatedProperties } from '../../Hooks/mapTranslatedProperties';
import { useTranslation } from 'react-i18next';
import useLangCode from '../../Hooks/useLangCode';


const Categories = ({item}:any) => {
  const code = useLangCode()

  return (
    <div className='Categories'>
      
                <div className='Categories_Item'>
                    <img   alt=''  src={BaseURL+ item?.category_image} onError={useImageError}/>
                    <button  > {(item?.category_translations.at(0)['name'])} </button>
                </div>
    </div>
  )
}

export default Categories