import { createContext, useState, useEffect } from 'react';

import { addCollectionAndDocuments, getCategoriesAndDocuments } from '../utils/firebase/firebase.utils';

// import SHOP_DATA from '../shop-data.js';


export const CategoriesContext = createContext({
  categoriesMap: {},
});

export const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setCategoriesMap] = useState({});


  /*  Push product data to FireStore -
    NB: I want this to run literally once, thus commenting out after it's single use ]
  
  useEffect(() => {
    addCollectionAndDocuments('product-categories', SHOP_DATA);
  }, []);
  
  */ 


  //  Fetching the products data from FireStore - every timet the component mounts
  useEffect(() => {
    const fetchData = async () => {
      const categoryMap = await getCategoriesAndDocuments();
      //console.log(categoryMap);
      setCategoriesMap(categoryMap);
      return categoryMap;
    }
    fetchData();

  }, []);

  const value = { categoriesMap };

  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};