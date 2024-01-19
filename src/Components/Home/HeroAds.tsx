import React from 'react';
import { THeroAd } from '../../Layout/app/Types';
import { Link } from 'react-router-dom';


const HeroAds = ({data}:any) => {
  const adData: any = [
    {
      imageUrl: '../HeroSection/Hero2.jpg',
      title: 'NEW ARRIVALS',
      subtitle: 'SUMMER SALE',
      discount: '30% OFF',
      link: '/',
          btn:"shop now"
  
    },
    {
      imageUrl: '../HeroSection/Hero2.jpg',
      title: 'NEW ARRIVALS',
      subtitle: 'SUMMER SALE',
      discount: '40% OFF',
      link: '/',
          btn:"shop now"
  
    },
  ];
  
  return (
    <div className='HeroSection_Ads'>
      {adData.map((item:THeroAd, index:number) => (
        <div className='Ad_Container' key={index}>
          <img alt='' className='banner1' src={item.imageUrl} />
          <div className='Ad_Info'>
            <h4 className='underLineText'>{item.title}</h4>
            <h5>
              {item.subtitle} <br /> <strong>{item.discount}</strong>
            </h5>
            <Link to={item.link}>{item?.btn}</Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HeroAds;
