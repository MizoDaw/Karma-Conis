import React from 'react';
import { THeroAd } from '../../Layout/app/Types';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { BaseURL } from '../../api/config';


const HeroAds = ({data}:any) => {

  const [t] = useTranslation();
  const ImageData = data?.ads?.map((item:any)=>{
    return item?.translations?.map((item:any)=>{
      return item?.image
    })
  })
  
  
  return (
    <div className='HeroSection_Ads'>
      {/* {adData.map((item:THeroAd, index:number) => (
        <div className='Ad_Container' key={index}>
          <img alt='' className='banner1' src={item.imageUrl} />
          <div className='Ad_Info'>
            <h4 className='underLineText'> {t(`${item.title}`)}</h4>
            <h5>
            {t(`${item.subtitle}`)}  <br /> <strong> {t(`${item.discount}`)} </strong>
            </h5>
            <Link to={item.link}> {t(`${item.btn}`)} </Link>
          </div>
        </div>
      ))} */}
       {ImageData?.map((item:any, index:number) => (
        <div className='Ad_Container' key={index}>
          <img alt='' className='banner1'  src={BaseURL + item[0]}  />
        </div>
      ))}
    </div>
  );
};

export default HeroAds;
