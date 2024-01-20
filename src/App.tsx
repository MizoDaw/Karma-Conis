import {lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom'
import Loading from './Components/Utils/Loading/Loading';
import Auth from './Pages/Auth/Page';
import Page from './Pages/Home/Page';
import Product from './Pages/Product/Product';
import CartPage from './Pages/Cart/CartPage';
import Products from './Pages/Product/Products';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import Consigne from './Pages/Consigne/Consigne';
import SingleOrderPage from './Pages/SingleOrder/SingleOrderPage';
import OrdersPage from './Pages/Orders/OrdersPage';
const Page404 = lazy(() => import("./Layout/app/NotFoundPage"))

const App = () => {

  
  return (
    <Routes>
      <Route path="*" element={<Suspense fallback={<Loading />}> <Page404 /></Suspense>} />
      <Route path="/auth" element={<Suspense fallback={<Loading />}> <Auth /></Suspense>} />
      <Route path="/" element={<Suspense fallback={<Loading />}> <Page /></Suspense>} />
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