import {configureStore} from '@reduxjs/toolkit';
import {setupListeners} from '@reduxjs/toolkit/query';

import searchReducer from '../features/search/searchSlice';
import {superheroApi} from '../services/superheroapi';

export const store = configureStore({
  reducer: {
    search: searchReducer,
    [superheroApi.reducerPath]: superheroApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(superheroApi.middleware),
});

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
setupListeners(store.dispatch);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
