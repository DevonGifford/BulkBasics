import { compose, createStore, applyMiddleware, Middleware } from 'redux';

import { persistStore, persistReducer, PersistConfig } from 'redux-persist';

import storage  from 'redux-persist/lib/storage';  // defaults to localStorage for web

import { logger } from 'redux-logger';
//import { customLoggerMiddleware } from './middleware/custom-logger';

//import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga'
import { rootSaga } from './root-saga';
import { rootReducer } from './root-reducer';




export type RootState = ReturnType<typeof rootReducer>

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

type ExtendedPersistConfig = PersistConfig<RootState> & {
  whitelist: (keyof RootState)[];
};

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart']
}

const sagaMiddleware = createSagaMiddleware();

const persistedReducer = persistReducer(persistConfig, rootReducer)



const middleWares = [
  process.env.NODE_ENV !== 'production' && logger, 
  sagaMiddleware
].filter((middleware): middleware is Middleware => Boolean(middleware)); 

//Custom Logger Middleware - used for debugging next actions more accuratley 
//const middleWares = [customLoggerMiddleware];



//Enable Redux-Dev-Tools 
const composedEnhancer = 
(process.env.NODE_ENV !== 'production' && 
window && 
window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
compose;


const composedEnhancers = composedEnhancer(applyMiddleware(...middleWares));

export const store = createStore(persistedReducer, undefined, composedEnhancers);

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);