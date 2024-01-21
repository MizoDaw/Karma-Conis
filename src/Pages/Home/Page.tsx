import HeroSection from '../../Components/Home/HeroSection'
import MovesAds from '../../Components/Home/MovesAds'
import SpecialProperties from '../../Components/Home/SpecialProperties'
import ProductSection from '../../Components/Home/ProductSection'
import Layout from '../../Layout/app/Layout'
import BigAds from '../../Components/Home/BigAds'
import { BigAdsData, CategoriesData, MovesAdsData, Product2, ProductSectionData2, specialPropertiesData } from './HomeData'
import CategoriesSwiper from '../../Components/Home/CategoriesSwiper'
import {useHeroSectionData, useProductData} from '../../Redux/DispatchData'
import { useGetAllHome } from '../../api/Home'
import Highlight from '../../Components/Home/Sections/Highlight'
import Purchase from '../../Components/Home/Sections/Purchase'
import Loading from '../../Components/Utils/Loading/Loading'
import LoadingPage from '../Loading/LoadingPage'

const Page = () => {
    
    const {data , isLoading} = useGetAllHome();


    // if(isLoading){
    //   return <LoadingPage/>
    // }

  return (
    <Layout  className='HomePage'>
      <HeroSection data={data?.data?.slider} />
      <SpecialProperties data={specialPropertiesData} />
      {/* <CategoriesSwiper data={data} /> */}

      <MovesAds {...MovesAdsData} />
      <Highlight data={data?.data?.product_highlight}  />
      <BigAds data={data?.data?.ads} />
      <Purchase data={data?.data?.product_most_purchase}  />

    </Layout> 
  )
}

export default Page