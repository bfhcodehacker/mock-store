import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { appFonts } from '../constants/fonts';

export interface ThemeText {
  color: string;
  fontFamily: string;
}

export interface ThemeState {
  primaryColor: string;
  primaryEndColor: string;
  primaryFont: ThemeText;
  secondaryColor: string;
  secondaryFont: ThemeText;
}

export const initialThemeState: ThemeState = {
  primaryColor: '#00008B',
  primaryEndColor: '#6e70f3ff',
  primaryFont: {
    color: '#fff',
    fontFamily: appFonts.inter
  },
  secondaryColor: '#fff',
  secondaryFont: {
    color: '#00008B',
    fontFamily: appFonts.inter
  }
};

export const themeDataSlice = createSlice({
  name: 'theme',
  initialState: initialThemeState,
  reducers: {
    changePrimaryColor: (state, action: PayloadAction<string>) => {
      state.primaryColor = action.payload;
    },
    changePrimaryEndColor: (state, action: PayloadAction<string>) => {
      state.primaryEndColor = action.payload;
    },
    changePrimaryFont: (state, action: PayloadAction<ThemeText>) => {
      state.primaryFont = action.payload;
    },
    changeSecondaryColor: (state, action: PayloadAction<string>) => {
      state.secondaryColor = action.payload;
    },
    changeSeconaryFont: (state, action: PayloadAction<ThemeText>) => {
      state.secondaryFont = action.payload;
    },
    setNewTheme: (state, action: PayloadAction<ThemeState>) => {
      return action.payload;
    }
  }
});

export const {
  changePrimaryColor,
  changePrimaryEndColor,
  changePrimaryFont,
  changeSeconaryFont,
  changeSecondaryColor,
  setNewTheme
} = themeDataSlice.actions;

export default themeDataSlice.reducer;