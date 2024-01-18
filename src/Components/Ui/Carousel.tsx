import React from 'react';
import { Carousel } from 'antd';
import { TbannerData } from '../../Layout/app/Types';
import { Link } from 'react-router-dom';
import { BaseURL } from '../../api/config';
<<<<<<< HEAD
import useImageError from '../../Hooks/useImageError';
import { UserImageURL } from '../../Layout/app/Const';
=======
>>>>>>> 9adeaea (fix home)



const CarouselApp= (data:any) => {
  
  return(
<<<<<<< HEAD
    <Carousel autoplay>
      {data?.data?.data?.map((item:any, index:number) => (
        <div className='banner_Container' key={index}>
          <img alt='' className='banner1' src={BaseURL+item.slider_translations[0]?.image || UserImageURL} onError={useImageError}  />
=======
    <Carousel autoplay  dots={true}>
      {data?.data.map((item:any, index:number) => (
        <div className='banner_Container' key={index}>
          <img alt='' className='banner1' src={BaseURL +item.slider_translations?.at(0).image} />
>>>>>>> 9adeaea (fix home)
          {/* <div className='banner_Info'>
            <h1 className='underLineText'>{item.title}</h1>
            <h2>
              {item.subtitle} <br /> <strong>{item.discount}</strong>
            </h2>
            <Link to={item.link}>{item?.btn} &#8599; </Link>
          </div> */}
        </div>
      ))}
    </Carousel>
  );
  
}
export default CarouselApp;
