import { configureStore } from '@reduxjs/toolkit'
import { MoviesAPI } from './Apis/MoviesApi';
import { setupListeners } from '@reduxjs/toolkit/query'


const store = configureStore({
  reducer: {
    [MoviesAPI.reducerPath] : MoviesAPI.reducer,

  },
 middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(MoviesAPI.middleware),
    devTools: true
})

setupListeners(store.dispatch);


export default store