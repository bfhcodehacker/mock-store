import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { productApi } from "../src/reducers/productData";
import storeDataReducer from "../src/reducers/storeData";
import cartDataReducer from '../src/reducers/cartData';
import accountReducer from "../src/reducers/accountData";
import themeReducer from "../src/reducers/themeData";

export const rootReducer = combineReducers({
  storeData: storeDataReducer,
  [productApi.reducerPath]: productApi.reducer,
  cartData: cartDataReducer,
  account: accountReducer,
  theme: themeReducer
});

export const setupStore = (preloadedState?: Partial<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(productApi.middleware),
    preloadedState
  })
}

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];