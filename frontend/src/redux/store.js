import { createStore, applyMiddleware } from 'redux';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistStore, persistReducer } from 'redux-persist';
import { createLogger } from 'redux-logger';

import rootReducer from './reducers';
import { CLEAR_REDUX, USE_LOGGER } from '../config';

if (CLEAR_REDUX) {
  AsyncStorage.clear();
}

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  // do not persist font loading
  blacklist: ['app'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const loggerMiddleware = createLogger();

let store;
if (USE_LOGGER) {
  store = createStore(persistedReducer, applyMiddleware(loggerMiddleware));
} else {
  store = createStore(persistedReducer);
}

const persistor = persistStore(store);

export { store, persistor };
