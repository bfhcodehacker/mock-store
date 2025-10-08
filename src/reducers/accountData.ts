import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { SignInData, UserCredentials, UserData } from "../types/account";
import CookieManager from '@react-native-cookies/cookies';


export const signIn = createAsyncThunk(
  'account/signIn',
  async (data: UserCredentials) => {
    try {
      const body = JSON.stringify(data);
      const options = {
        headers: {
          'Content-Type': 'application/json'
        }
      };
      const response = await axios.post('https://dummyjson.com/auth/login', body, options);
      console.log('login response', response);
      if (response.data.accessToken && response.headers?.['set-cookie']?.[0]) {
        CookieManager.setFromResponse(
          'https://dummyjson.com',
          response.headers?.['set-cookie']?.[0]
        ).then((success) => console.log('set cookies from login success', success));
      }
      return response.data;
    } catch (e) {
      return '';
    }
  }
);

export const getUserData = createAsyncThunk(
  'account/getUserData',
  async () => {
    console.log('get user data');
    const response = await axios.get('https://dummyjson.com/auth/me');
    console.log('user data response', response);
    return response.data;
  }
);

export interface AccountState {
  isLoggedIn: boolean;
  signInData?: SignInData;
  userData?: UserData;
  signInStatus: 'idle' | 'loading' | 'success' | 'failed';
  userDataStatus: 'idle' | 'loading' | 'success' | 'failed';
}

const initialAccountState: AccountState = {
  isLoggedIn: false,
  signInStatus: 'idle',
  userDataStatus: 'idle'
};

export const accountDataSlice = createSlice({
  name: 'accountData',
  initialState: initialAccountState,
  reducers: {
    signOut: (state) => {
      state = initialAccountState;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(signIn.pending, (state) => {
        state.signInStatus = 'loading';
      })
      .addCase(signIn.fulfilled, (state, action) => {
        console.log('sign in fulfilled', action);
        if (action.payload.accessToken) {
          state.isLoggedIn = true;
          state.signInData = action.payload;
          state.signInStatus = 'success';
        } else {
          state.isLoggedIn = false;
          state.signInStatus = 'failed';
        }
      })
      .addCase(signIn.rejected, (state) => {
        state.signInStatus = 'failed';
      })
      .addCase(getUserData.pending, (state) => {
        state.userDataStatus = 'loading';
      })
      .addCase(getUserData.fulfilled, (state, action) => {
        console.log('got user data', action);
        state.userDataStatus = 'success';
        state.userData = action.payload;
      })
      .addCase(getUserData.rejected, (state) => {
        state.userDataStatus = 'failed';
      })
  }
});

export const { signOut } = accountDataSlice.actions;
export default accountDataSlice.reducer;