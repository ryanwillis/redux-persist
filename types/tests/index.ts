import { Reducer, createStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'reduxjs-toolkit-persist';
import storage from 'reduxjs-toolkit-persist/lib/storage';

interface State {
  value: string;
  other: number;
}

declare const rootReducer: Reducer<State>;

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default () => {
  const store = createStore(persistedReducer);
  const persistor = persistStore(store);

  return { store, persistor };
};
