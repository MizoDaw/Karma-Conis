// import React from 'react';
// import { Carousel } from 'antd';
// import { TbannerData } from '../../Layout/app/Types';
// import { Link } from 'react-router-dom';
// import { BaseURL } from '../../api/config';
// import useImageError from '../../Hooks/useImageError';
// import { UserImageURL } from '../../Layout/app/Const';



// const CarouselApp= (data:any) => {
  
//   return(
//     <Carousel autoplay>
//       {data?.data?.data?.map((item:any, index:number) => (
//         <div className='banner_Container' key={index}>
//           <img alt='' className='banner1' src={BaseURL+item.slider_translations[0]?.image || UserImageURL} onError={useImageError}  />
//           {/* <div className='banner_Info'>
//             <h1 className='underLineText'>{item.title}</h1>
//             <h2>
//               {item.subtitle} <br /> <strong>{item.discount}</strong>
//             </h2>
//             <Link to={item.link}>{item?.btn} &#8599; </Link>
//           </div> */}
//         </div>
//       ))}
//     </Carousel>
//   );
  
// }
// export default CarouselApp;


import React from 'react';
import { Carousel } from 'antd';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';


const CarouselApp = (data:any) =>{

  const bannerData  = [
    {
      imageUrl: '../Coins/coins_home_image.jpg',
      title: 'NEW ARRIVALS',
      subtitle: 'SUMMER SALE',
      discount: '20% OFF',
      link: '/',
      btn:"Shop Now"
    },
     {
      imageUrl: '../Coins/coins_home_image.jpg',
      title: 'NEW ARRIVALS',
      subtitle: 'SUMMER SALE',
      discount: '20% OFF',
      link: '/',
      btn:"Shop Now"
    },
     {
      imageUrl: '../Coins/coins_home_image.jpg',
      title: 'NEW ARRIVALS',
      subtitle: 'SUMMER SALE',
      discount: '20% OFF',
      link: '/',
      btn:"Shop Now"
    },
  ]
  const [t] = useTranslation();

  return (

    <Carousel autoplay>
      {bannerData.map((item:any, index:number) => (
        <div className='banner_Container' key={index}>
          <img alt='' className='banner1' src={item.imageUrl} />
          <div className='banner_Info'>
            <h1 className='underLineText'> {t(`${item.title}`)} </h1>
            <h2>
            {t(`${item.subtitle}`)} <br /> <strong> {t(`${item.discount}`)} </strong>
            </h2>
            <Link to={item.link}> {t(`${item.btn}`)}  &#8599; </Link>
          </div>
        </div>
      ))}
    </Carousel>
  );
}

export default CarouselApp;
