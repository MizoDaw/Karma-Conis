import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination } from 'swiper/modules';
import CardProduct from './CardProduct';
import { TProduct } from '../../Layout/app/Types';


interface CardSwiperProps {
  data: TProduct[];
}

const CardSwiper: React.FC<CardSwiperProps> = ({ data }) => {
  return (
    <div className='CardSwiper'>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
      
        breakpoints={{
          260: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          360: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          430: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          570: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          640: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          650: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          900: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1200: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
          1500: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        {
          data?.map((item:TProduct,index:number)=>{
            return(
              <SwiperSlide key={index}><CardProduct item={item} /></SwiperSlide>

            )
          })
        }

      </Swiper>
    </div>
  );
}

export default CardSwiper;
