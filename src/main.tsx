import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';

import { Elements } from '@stripe/react-stripe-js';
import { stripePromise } from './utils/stripe/stripe.utils.js';

import App from './App.jsx'

import { Provider } from 'react-redux';
import { store, persistor } from './store/store.js';

/*------------------------------------------
converted from useContext hooks to Redux
------------------------------------------*/
//import { UserProvider } from './contexts/user.context.jsx';
//import { CategoriesProvider } from './contexts/categories.context.jsx';
//import { CartProvider } from './contexts/cart.context.jsx'


import './index.scss';

const rootElement = document.getElementById('root') as Element | null;
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <BrowserRouter>
            {/* <UserProvider> */}
              {/* <CategoriesProvider>  */}
                {/* <CartProvider> */}
                  <Elements stripe={stripePromise}>
                    <App />
                  </Elements>
                {/* </CartProvider> */}
              {/* </CategoriesProvider> */}
            {/* </UserProvider> */}
          </BrowserRouter>
        </PersistGate>
      </Provider>
    </React.StrictMode>,
  );
}
