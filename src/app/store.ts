import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { productApi } from "../reducers/productData";
import storeDataReducer from "../reducers/storeData";

export const store = configureStore({
  reducer: {
    storeData: storeDataReducer,
    [productApi.reducerPath]: productApi.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(productApi.middleware)
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;