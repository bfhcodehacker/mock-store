import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { Category } from "../types/category";
import { Product } from "../types/product";

export const fetchCategories = createAsyncThunk(
  'categories/fetchCategories',
  async () => {
    const response = await axios.get('https://dummyjson.com/products/categories');
    return response.data;
  }
);

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async () => {
    const response = await axios.get('https://dummyjson.com/products');
    return response.data;
  }
)

export interface StoreDataState {
  categories: Category[];
  featuredCategories: Category[];
  featuredProducts: Product[];
  cartProducts: Product[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
}

const initialState: StoreDataState = {
  categories: [],
  featuredCategories: [],
  featuredProducts: [],
  cartProducts: [],
  status: 'idle'
}

export const storeDataSlice = createSlice({
  name: 'storeData',
  initialState,
  reducers: {
    setCategoryData: (state, action: PayloadAction<Category[]>) => {
      state.categories = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        if (action.payload?.length) {
          state.categories = action.payload;
          state.featuredCategories = action.payload.slice(0, 4);
        }
        state.status = 'succeeded';
      })
      .addCase(fetchCategories.rejected, (state) => {
        state.status = 'failed';
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        if (action.payload?.products?.length) {
          state.featuredProducts = action.payload.products.slice(0, 8);
          state.cartProducts = action.payload.products.slice(-8);
        }
      })
  },
});

export const { setCategoryData } = storeDataSlice.actions;

export default storeDataSlice.reducer;