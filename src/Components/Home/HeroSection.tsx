import React from 'react'
import CarouselApp from '../Ui/Carousel'
import { THeroAd,TbannerData } from '../../Layout/app/Types';

type THeroSection={
  data :{ bannerData: TbannerData[]; adData: THeroAd[]}
}
const HeroSection:React.FC<THeroSection> = ({data}) => {
  return (
<div className='HeroSection'>
      <div className='HeroSection_Carousel'>
      <CarouselApp data={data?.bannerData} />
      </div>
     </div>
    )
}

export default HeroSection