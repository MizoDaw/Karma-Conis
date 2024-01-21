import {lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom'
import Loading from './Components/Utils/Loading/Loading';
import Consigne from './Pages/Consigne/Consigne';
const Page404 = lazy(() => import("./Layout/app/NotFoundPage"))

const OrdersPage = lazy(() => import("./Pages/Orders/OrdersPage"))
const Contact = lazy(() => import("./Pages/Contact/Contact"))
const About = lazy(() => import("./Pages/About/About"))
const Products = lazy(() => import("./Pages/Product/Products"))
const Product = lazy(() => import("./Pages/Product/Product"))
const Home  = lazy(() => import("./Pages/Home/Page"))
const CartPage = lazy(() => import("./Pages/Cart/CartPage"))
const Auth = lazy(() => import("./Pages/Auth/Page"))
const SingleOrderPage = lazy(() => import("./Pages/SingleOrder/SingleOrderPage"))

const App = () => {

  
  return (
    <Routes>
      <Route path="*" element={<Suspense fallback={<Loading />}> <Page404 /></Suspense>} />
      <Route path="/auth" element={<Suspense fallback={<Loading />}> <Auth /></Suspense>} />
      <Route path="/" element={<Suspense fallback={<Loading />}> <Home /></Suspense>} />
      <Route path="/product/:id" element={<Suspense fallback={<Loading />}> <Product /></Suspense>} />
      <Route path="/products" element={<Suspense fallback={<Loading />}> <Products /></Suspense>} />
      <Route path="/cart" element={<Suspense fallback={<Loading />}> <CartPage /></Suspense>} />
      <Route path="/about" element={<Suspense fallback={<Loading />}> <About /></Suspense>} />
      <Route path="/contact" element={<Suspense fallback={<Loading />}> <Contact /></Suspense>} />
      <Route path="/single_order" element={<Suspense fallback={<Loading />}> <SingleOrderPage /></Suspense>} />
      <Route path="/consigne" element={<Suspense fallback={<Loading />}> <Consigne /></Suspense>} />
      <Route path="/orders" element={<Suspense fallback={<Loading />}> <OrdersPage /></Suspense>} />


    </Routes>

        
     
  )
}

export default App