import { configureStore } from '@reduxjs/toolkit'
import filter from './Slices/filter/slice'
import cart from './Slices/cart/slice'
import pizza from './Slices/pizza/slice'
import { useDispatch } from 'react-redux';

export const store = configureStore({
  reducer: {
  filter,
  cart,
  pizza
  },
});
export type RootState = ReturnType<typeof store.getState>;

type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>();