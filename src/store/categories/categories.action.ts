import { CATEGORIES_ACTION_TYPES, Category } from './categories.types';
import { 
  createAction, 
  Action, 
  ActionWithPayload,
  withMatcher,

} from '../../utils/reducer/reducer.utils';



export type FetchCategoriesStart = Action<CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START>

export type FetchCategoriesSuccess = ActionWithPayload<CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS, Category[]>

export type FetchCategoriesFailure = ActionWithPayload<CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED, Error>


export type CategoryAction = 
| FetchCategoriesStart 
| FetchCategoriesSuccess 
| FetchCategoriesFailure;


export const fetchCategoriesStart = withMatcher((): FetchCategoriesStart =>
  createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START));

  fetchCategoriesStart.match 

export const fetchCategoriesSuccess = withMatcher((
  categoriesArray: Category[]
  ) : FetchCategoriesSuccess =>
  createAction(
    CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS,
    categoriesArray
  ));


export const fetchCategoriesFailure = withMatcher((
  error : Error
  ) : FetchCategoriesFailure =>
  createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED, error));


