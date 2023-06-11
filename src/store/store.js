import { compose, createStore, applyMiddleware } from 'redux';

import { persistStore, persistReducer } from 'redux-persist';
import storage  from 'redux-persist/lib/storage';  // defaults to localStorage for web

import logger from 'redux-logger';
//import { customLoggerMiddleware } from './middleware/custom-logger';

import thunk from 'redux-thunk';
import { rootReducer } from './root-reducer';




//only want to run this if we are in a devlopment environment 
const middleWares = [process.env.NODE_ENV !== 'production' && logger, thunk].filter(Boolean); 

//Custom Logger Middleware - used for debugging next actions more accuratley 
//const middleWares = [customLoggerMiddleware];



const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['user']
}

const persistedReducer = persistReducer(persistConfig, rootReducer)



//composeEnhancer that can use the Redux-Dev-Tools 
const composedEnhancer = 
(process.env.NODE_ENV !== 'production' && 
window && 
window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
compose;


const composedEnhancers = composedEnhancer(applyMiddleware(...middleWares));

export const store = createStore(persistedReducer, undefined, composedEnhancers);

export const persistor = persistStore(store);