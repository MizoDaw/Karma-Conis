import React from 'react';
import { Carousel } from 'antd';
import { TbannerData } from '../../Layout/app/Types';
import { Link } from 'react-router-dom';



const CarouselApp= (data:any) => {
  console.log(data?.data,"hello");
  
  return(
    <Carousel autoplay>
      {data?.data.map((item:any, index:number) => (
        <div className='banner_Container' key={index}>
          <img alt='' className='banner1' src={item.social_media_image} />
          <div className='banner_Info'>
            <h1 className='underLineText'>{item.title}</h1>
            <h2>
              {item.subtitle} <br /> <strong>{item.discount}</strong>
            </h2>
            <Link to={item.link}>{item?.btn} &#8599; </Link>
          </div>
        </div>
      ))}
    </Carousel>
  );
  
}
export default CarouselApp;
