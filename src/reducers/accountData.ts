import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { SignInData, UserCredentials, UserData } from "../types/account";
import CookieManager from '@react-native-cookies/cookies';
import { USER_CREDENTIALS_KEY } from "../constants/constants";
import * as Keychain from 'react-native-keychain';

export const signIn = createAsyncThunk(
  'account/signIn',
  async (data: UserCredentials) => {
    const signInData = {
      username: data.username,
      password: data.password
    };
    try {
      const body = JSON.stringify(signInData);
      const options = {
        headers: {
          'Content-Type': 'application/json'
        }
      };
      const response = await axios.post('https://dummyjson.com/auth/login', body, options);
      if (response.data.accessToken && response.headers?.['set-cookie']?.[0]) {
        CookieManager.setFromResponse(
          'https://dummyjson.com',
          response.headers?.['set-cookie']?.[0]
        );
        if (data.savePassword) {
          const username = data.username;
          const password = data.password;
          await Keychain.setGenericPassword(username, password, {service: USER_CREDENTIALS_KEY});
        }
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
    const response = await axios.get('https://dummyjson.com/auth/me');
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
  userDataStatus: 'idle',
  userData: undefined,
  signInData: undefined
};

export const accountDataSlice = createSlice({
  name: 'accountData',
  initialState: initialAccountState,
  reducers: {
    signOut: (state) => {
      state.isLoggedIn = false;
      state.signInData = undefined;
      state.signInStatus = 'idle';
      state.userData = undefined;
      state.userDataStatus = 'idle';
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(signIn.pending, (state) => {
        state.signInStatus = 'loading';
      })
      .addCase(signIn.fulfilled, (state, action) => {
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