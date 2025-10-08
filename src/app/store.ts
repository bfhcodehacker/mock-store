import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { productApi } from "../reducers/productData";
import storeDataReducer from "../reducers/storeData";
import cartDataReducer from '../reducers/cartData';
import accountReducer from "../reducers/accountData";

export const store = configureStore({
  reducer: {
    storeData: storeDataReducer,
    [productApi.reducerPath]: productApi.reducer,
    cartData: cartDataReducer,
    account: accountReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(productApi.middleware)
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;