import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { Category } from "../types/category";

export const fetchCategories = createAsyncThunk(
  'categories/fetchCategories',
  async () => {
    try {
      const response = await axios.get('https://dummyjson.com/products/categories');
      return response.data;
    } catch (err) {
      return 'Error loading categories';
    }
  }
);

export interface StoreDataState {
  categories: Category[];
  featuredCategories: Category[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
}

const initialState: StoreDataState = {
  categories: [],
  featuredCategories: [],
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
          state.featuredCategories = action.payload.splice(0, 4);
        }
        state.status = 'succeeded';
      })
      .addCase(fetchCategories.rejected, (state) => {
        state.status = 'failed';
      })
  },
});

export const { setCategoryData } = storeDataSlice.actions;

export default storeDataSlice.reducer;