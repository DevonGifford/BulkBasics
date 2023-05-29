import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';

import App from './App.jsx'
import { UserProvider } from './contexts/user.context.jsx';
import { ProductsProvider } from './contexts/products.context.jsx';
import { CartProvider } from './contexts/cart.context.jsx'

import './index.scss';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <ProductsProvider> 
          <CartProvider>
            <App />
          </CartProvider>
        </ProductsProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
