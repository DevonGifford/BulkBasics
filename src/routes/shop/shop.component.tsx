import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

// Fetching Store-Products Data from FireStore
import { useDispatch } from 'react-redux';
import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.utils';
//import { fetchCategoriesStartAsync } from '../../store/categories/categories.action'; //replaced for redux-saga
import { fetchCategoriesStart } from '../../store/categories/categories.action';

import CategoriesPreview from '../categories-preview/categories-preview.component';
import Category from '../category/category.component';


const Shop = () => {
  const dispatch = useDispatch();

  /*  
  Fetching the products data from FireStore - every timet the component mounts (PRE REDUX-THUNK)
  ----------------------------------------------------------------------------------------------
  useEffect(() => {
    const fetchData = async () => {
      const categoriesArray = await getCategoriesAndDocuments();
      //console.log('LOG CHECK - the data from firestore has arraived', categoriesArray);
      dispatch(setCategories(categoriesArray));
    }
    fetchData();
  }, []);
  */

  useEffect(() => {
    dispatch(fetchCategoriesStart());
  }, []);

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=':category' element={<Category />} />
    </Routes>
  );
};

export default Shop;