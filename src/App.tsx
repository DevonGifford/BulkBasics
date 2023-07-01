import { useEffect, lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import Spinner from './components/spinner/spinner.component';
import { checkUserSession } from './store/user/user.action';
import { GlobalStyle } from './global.styles';
import Thankyou from './routes/payment-confirmation/payment-confirmation.component';

// import Navigation from './routes/navigation/navigation.component';
// import Authentication from './routes/authentication/authentication.component';
// import Shop from './routes/shop/shop.component';
// import Checkout from './routes/checkout/checkout.component';
// import About from './routes/about/about.component';
// import Home from './routes/home/home.component';
const Home = lazy(() =>  import('./routes/home/home.component'));
const Navigation = lazy(() => import('./routes/navigation/navigation.component'));
const Authentication = lazy(() => import('./routes/authentication/authentication.component'));
const Shop = lazy(() => import('./routes/shop/shop.component'));
const Checkout = lazy(() => import('./routes/checkout/checkout.component'));
const About = lazy(() => import('./routes/about/about.component'));
const Payment = lazy(() => import('./routes/payment/payment.component'));

const App = () => {
  const dispatch = useDispatch();

  //  Signing in Users 
  useEffect(() => {
    dispatch(checkUserSession());
  }, [dispatch]);

  return (
    <Suspense fallback={<Spinner />}>
      <GlobalStyle />
      <Routes>

        <Route path='/' element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path='shop/*' element={<Shop />} />
          <Route path='auth' element={<Authentication />} />
          <Route path='checkout' element={<Checkout />} />
          <Route path='about' element={<About />} />
          <Route path='checkout/payment' element={<Payment />} />
          <Route path='checkout/payment/payment-confirmation' element={<Thankyou />} />
        </Route>

      </Routes>
      
    </Suspense>
  );
};

export default App;