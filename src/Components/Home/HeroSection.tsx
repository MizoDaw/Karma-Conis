// import React from 'react'
// import CarouselApp from '../Ui/Carousel'
// import { THeroAd,TbannerData } from '../../Layout/app/Types';


// const HeroSection = (data:any) => {
  
//   return (
// <div className='HeroSection'>
//       <div className='HeroSection_Carousel'>
//       <CarouselApp data={data} />
//       </div>
//      </div>
//     )
// }

// export default HeroSection

import React from 'react'
import CarouselApp from '../Ui/Carousel'
import HeroAds from './HeroAds'
import { THeroAd,TbannerData } from '../../Layout/app/Types';


const HeroSection = ({data}:any) => {
  return (
<div className='HeroSection'>
      <div className='HeroSection_Carousel'>
      <CarouselApp data={data} />
      </div>
     <HeroAds  data={data} />
     </div>  )
}

export default HeroSection