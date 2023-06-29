import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { store, persistor } from './store/store.js';
import ScrollToTop from './utils/scroll-to-top/scrolltotop.js';

// import { Elements } from '@stripe/react-stripe-js';
// import { stripePromise } from './utils/stripe/stripe.utils.js';
// import { StripeElementsOptions } from '@stripe/stripe-js';

import App from './App.jsx'


const rootElement = document.getElementById('root') as Element | null;
if (rootElement) 
{
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <BrowserRouter>
              <ScrollToTop />
              <App />
          </BrowserRouter>
        </PersistGate>
      </Provider>
    </React.StrictMode>,
  );
}
