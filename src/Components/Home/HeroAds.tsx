import React from 'react';
import { THeroAd } from '../../Layout/app/Types';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';


const HeroAds = ({data}:any) => {
  const adData: any = [
    {
      imageUrl: '../HeroSection/Hero2.jpg',
      title: 'NEW ARRIVALS',
      subtitle: 'SUMMER SALE',
      discount: '30% OFF',
      link: '/',
            btn:"Shop Now"
  
    },
    {
      imageUrl: '../HeroSection/Hero2.jpg',
      title: 'NEW ARRIVALS',
      subtitle: 'SUMMER SALE',
      discount: '40% OFF',
      link: '/',
            btn:"Shop Now"
  
    },
  ];
  const [t] = useTranslation();

  
  return (
    <div className='HeroSection_Ads'>
      {adData.map((item:THeroAd, index:number) => (
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
      ))}
    </div>
  );
};

export default HeroAds;
