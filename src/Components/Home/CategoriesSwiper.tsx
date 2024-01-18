import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination } from 'swiper/modules';
import Categories from './Categories';


const CategoriesSwiper = (data:any) => {
  console.log(data?.data?.data?.category,'CategoriesSwiper');
  
  return (
    <div className='CategoriesSwiper'>
      <Swiper
        slidesPerView={3}
        spaceBetween={0}
        freeMode={true}
      
        breakpoints={{
          0: {
            slidesPerView: 2,
            
          },
          400: {
            slidesPerView: 3,
            
          },
          600: {
            slidesPerView: 3,
            
          },
          900: {
            slidesPerView: 4,
          },
          1200: {
            slidesPerView: 4,
          },
          1500: {
            slidesPerView: 4,
          },
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        {
          data?.data?.data?.category?.map((item:any,index:any)=>{
            return(
              <SwiperSlide key={index}><Categories item={item} index={index} /></SwiperSlide>

            )
          })
        }

      </Swiper>
    </div>
  );
}

export default CategoriesSwiper;
