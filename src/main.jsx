import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';

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


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          {/* <UserProvider> */}
            {/* <CategoriesProvider>  */}
              {/* <CartProvider> */}
                <App />
              {/* </CartProvider> */}
            {/* </CategoriesProvider> */}
          {/* </UserProvider> */}
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
)
