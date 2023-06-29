import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { Elements } from '@stripe/react-stripe-js';
import { stripePromise } from './utils/stripe/stripe.utils.js';
import { Provider } from 'react-redux';
import { store, persistor } from './store/store.js';
import { StripeElementsOptions } from '@stripe/stripe-js';
import ScrollToTop from './utils/scroll-to-top/scrolltotop.js';

import App from './App.jsx'


const options: StripeElementsOptions = {
  mode: 'payment',
  currency: 'eur',
  amount: 1099,
};

const rootElement = document.getElementById('root') as Element | null;
if (rootElement) 
{
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <BrowserRouter>
            <Elements options={options} stripe={stripePromise}>
              <ScrollToTop />
              <App />
            </Elements>
          </BrowserRouter>
        </PersistGate>
      </Provider>
    </React.StrictMode>,
  );
}
