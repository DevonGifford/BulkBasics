import { createSelector } from 'reselect';

const selectCategoryReducer = (state) => {
  //console.log('selector 1 fired');
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
  (categories) => {
    //console.log('selector 3 fired');
    return categories.reduce((acc, category) => {
      const { title, items } = category;
      acc[title.toLowerCase()] = items;
      return acc;
    }, {})
  }
);

//Spinng Loading Animation Selector
export const selectIsLoading = createSelector(
  [selectCategoryReducer],
  (categoriesSlice) => categoriesSlice.isLoading
);




/* Managing the Back end Spelling Mistake
-----------------------------------------------------
state.categoreis.categories

*/


/*  OLD REDUX METHOD BEFORE RESELECT
-------------------------------------------

export const selectCategoriesMap = (state) => {
  console.log('selector fired');
  return state.categoreis.categories
    .reduce((acc, category) => {
      const { title, items } = category;
      acc[title.toLowerCase()] = items;
      return acc;
    }, {});
  
//   };
  
*/