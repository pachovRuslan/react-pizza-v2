import { RootState } from './../store';
import { createSlice, createAsyncThunk, PayloadAction  } from '@reduxjs/toolkit';
import axios from 'axios';
import { Sort } from './filterSlice';



type Pizza = {
  id: string;
  title: string;
  imageUrl: string;
  price: number;
  count: number;
  types: number[];
  sizes: number[];
}

export enum Status {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error'
}

interface PizzaSliceState {
  items:Pizza[];
  status: Status
}

const initialState: PizzaSliceState = {
  items: [],
  status: Status.LOADING,
};

export type SearchPizzasParams = {
  order: string, 
  sortBy: string, 
  category: string, 
  search: string,
  currentPage: string, 

}

export const fetchPizzas = createAsyncThunk<Pizza[], SearchPizzasParams>(
  'pizza/fetchPizzasStatus', 
  async (params) => {
    const { order, sortBy, category, search, currentPage } = params;
    const { data } = await axios.get(
      `https://62c2a193876c4700f5296273.mockapi.io/items?page=${currentPage}&limit=8&${category}&sortBy=${sortBy}&order=${order}${search}`,
    );
    return data ;
  });
const PizzaSlice = createSlice({
  name: 'pizza',
  initialState,
  reducers: {
    setItems(state, action: PayloadAction<Pizza[]>) {
      state.items = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPizzas.pending, (state) => {
          state.status = Status.LOADING;
          state.items = [];
        });
        builder.addCase(fetchPizzas.fulfilled, (state, action) => {
          state.items = action.payload;
          state.status = Status.SUCCESS;
        });
        builder.addCase(fetchPizzas.rejected, (state) => {
          state.status = Status.ERROR;
          state.items = [];
        })
  }

});
export const selectPizzaData = (state: RootState)=> state.pizza;

export const { setItems } = PizzaSlice.actions;

export default PizzaSlice.reducer;
