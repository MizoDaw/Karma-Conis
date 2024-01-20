import React from 'react'
import { TBigAdsData } from '../../Layout/app/Types'
import { Currency } from '../../Layout/app/Const'
import { BaseURL } from '../../api/config'
import { useTranslation } from 'react-i18next'

const BigAds = ({data}:any) => {
 
 const BigAdsData:any= [
        {
                header : 'Final Reduction',
                img : "../BigAds/Ads1.jpg" ,
                mainText:"Sale up to 20% Off",
                textPrice:"Only From ",
                Price:"270",
                color:"lightMood"
            },
               {
                header : 'Weekend Sale',
                img : "../BigAds/Ads2.jpg" ,
                mainText:"Fine Smart Speaker",
                textPrice:"Starting at",
                Price:"185",
                color:"darkMood"
            }
        ]
        
        const [t] = useTranslation();

  return (
    <div className='BigAds'>
        
        {BigAdsData?.map((item:any,index:number)=>{            
            return(
                <div key={index} className={`BigAds_Item`}  >
                    <img src={item?.img} alt={item?.header} />

                    <div className='BigAds_Info'>
                        <h6> {t(`${item.header}`)}</h6>
                        <h3> {t(`${item.mainText}`)} </h3>
                     <div>
                           <p> {t(`${item.textPrice}`)} </p>
                        <strong> {Currency}  {t(`${item.Price}`)} </strong>
                     </div>
                    </div>
                </div>
            )
        })}
    </div>
  )
}

export default BigAds