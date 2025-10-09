import * as Keychain from 'react-native-keychain';
import { USER_CREDENTIALS_KEY } from '../constants/constants';
import { signIn, signOut } from '../reducers/accountData';
import CookieManager from '@react-native-cookies/cookies';
import { AppDispatch } from '../app/store';

export const useSavedCredentials = async (dispatch: AppDispatch) => {
  try {
    const credentials = await Keychain.getGenericPassword({service: USER_CREDENTIALS_KEY});
    if (credentials) {
      dispatch(signIn({
        username: credentials.username,
        password: credentials.password
      }));
    } 
  } catch (error) {
    console.error("Failed to access Keychain", error);
  }
}

export const signUserOut = async (dispatch: AppDispatch) => {
  await CookieManager.clearAll();
  await Keychain.resetGenericPassword({service: USER_CREDENTIALS_KEY});
  dispatch(signOut());
}