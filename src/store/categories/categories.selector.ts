import { createSelector } from 'reselect';
import { CategoriesState } from './categories.reducer';
import { CategoryMap } from './categories.types';
import { RootState } from '../store';


//ROOT ISSUE thus linter is throwing error on state - will solve later👇

const selectCategoryReducer = (state: RootState): CategoriesState =>  {
  // console.log('selector 1 fired');
  return state.categoreis;
};



export const selectCategories = createSelector(
  [selectCategoryReducer],
  (categoriesSlice) => {
    //console.log('selector 2 fired');
    return categoriesSlice.categories
  }
);



export const selectCategoriesMap = createSelector(
  [selectCategories],
  (categories): CategoryMap => {
    //console.log('selector 3 fired');
    return categories.reduce((acc, category) => {
      const { title, items } = category;
      acc[title.toLowerCase()] = items;
      return acc;
    }, {} as CategoryMap)
  }
);

//Spinng Loading Animation Selector 💫
export const selectIsLoading = createSelector(
  [selectCategoryReducer],
  (categoriesSlice) => categoriesSlice.isLoading
);




/* --------------------------------------------------- 
  NB:  Managing the Back-End FireStore Spelling Mistake 
-----------------------------------------------------
        state.categoreis.categories

*/
