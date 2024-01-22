import HeroSection from '../../Components/Home/HeroSection'
import MovesAds from '../../Components/Home/MovesAds'
import SpecialProperties from '../../Components/Home/SpecialProperties'
import Layout from '../../Layout/app/Layout'
import BigAds from '../../Components/Home/BigAds'
import {  MovesAdsData,specialPropertiesData } from './HomeData'
import { useGetAllHome } from '../../api/Home'
import Highlight from '../../Components/Home/Sections/Highlight'
import Purchase from '../../Components/Home/Sections/Purchase'
const Page = () => {
    
    const {data} = useGetAllHome();

  return (
    <Layout  className='HomePage'>
      <HeroSection data={data?.data?.slider} />
      <SpecialProperties data={specialPropertiesData} />
      <MovesAds {...MovesAdsData} />
      <Highlight data={data?.data?.product_highlight}  />
      <BigAds data={data?.data?.ads} />
      <Purchase data={data?.data?.product_most_purchase}  />

    </Layout> 
  )
}

export default Page