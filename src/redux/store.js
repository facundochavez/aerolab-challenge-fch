import { configureStore } from '@reduxjs/toolkit';
import userReducer from './states/user';
import productsReducer from './states/products';

export const store = configureStore({
  reducer: {
    user: userReducer,
    products: productsReducer,
  },
});

export default store;
