import { createContext, useState, useEffect } from 'react';

import { addCollectionAndDocuments, getCategoriesAndDocuments } from '../utils/firebase/firebase.utils';

// import SHOP_DATA from '../shop-data.js';




export const ProductsContext = createContext({
  products: [],
});

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);


/*  Push product data to FireStore -[ NB: I want this to run literally once, thus commenting out after it's single use ]
  
  useEffect(() => {
    addCollectionAndDocuments('product-categories', SHOP_DATA);
  }, []);
*/ 



//  Fetching the products data from FireStore - every timet the component mounts
  useEffect(() => {
    const fetchData = async () => {
      const categoryMap = await getCategoriesAndDocuments();
      //console.log(categoryMap);
      return categoryMap;
    }
    fetchData();

  }, []);

  const value = { products };

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};