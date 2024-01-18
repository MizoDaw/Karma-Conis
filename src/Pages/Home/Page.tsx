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

const Page = () => {
    const { Product } = useProductData()
    const { DataHeroSection } = useHeroSectionData();
    
    const {data} = useGetAllHome();
  console.log(data,"Page");
    
  return (
    <Layout data={data} className='HomePage'>
      {/* <HeroSection data={data?.data?.slider} /> */}
      <CategoriesSwiper data={data} />
      <MovesAds {...MovesAdsData} />
      <ProductSection data={Product}/>
      <BigAds data={BigAdsData} />
      <ProductSection data={ProductSectionData2}/>
    </Layout>
  )
}

export default Page