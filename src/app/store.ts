import { configureStore } from "@reduxjs/toolkit";
import storeDataReducer from "../reducers/storeData";

export const store = configureStore({
  reducer: {
    storeData: storeDataReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;