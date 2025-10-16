import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { productApi } from "../src/reducers/productData";
import storeDataReducer from "../src/reducers/storeData";
import cartDataReducer from '../src/reducers/cartData';
import accountReducer from "../src/reducers/accountData";
import themeReducer from "../src/reducers/themeData";

const rootReducer = combineReducers({
  storeData: storeDataReducer,
  [productApi.reducerPath]: productApi.reducer,
  cartData: cartDataReducer,
  account: accountReducer,
  theme: themeReducer
});


export const setupStore = (preloadedState?: Partial<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState
  })
}

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];