import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination } from 'swiper/modules';
import Categories from './Categories';


interface CategoriesSwiperProps {
  data: string[];
}

const CategoriesSwiper: React.FC<CategoriesSwiperProps> = ({ data }) => {
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
          data?.map((item,index)=>{
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
