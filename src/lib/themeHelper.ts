import AsyncStorage from '@react-native-async-storage/async-storage';
import { THEME_KEY } from '../constants/constants';
import { ThemeState } from '../reducers/themeData';

export const saveNewTheme = async (theme: ThemeState) => {
  try {
    const themesString = await AsyncStorage.getItem(THEME_KEY);
    let themes: ThemeState[] = [];
    if (!themesString) {
      themes = [theme];
    } else {
      const themesJson = JSON.parse(themesString);
      themes.push(...themesJson, theme);
    }
    await AsyncStorage.setItem(THEME_KEY, JSON.stringify(themes));
  } catch (e) {
    console.log('error saving theme');
  }
}

export const getThemes = async () => {
  try {
    const themesString = await AsyncStorage.getItem(THEME_KEY);
    if (!themesString) {
      return [];
    } else {
      const themes = JSON.parse(themesString);
      return themes;
    }
  } catch (e) {
    console.log('error fetching themes');
  }
}

export const updateSavedThemes = async (themes: ThemeState[]) => {
  try {
    await AsyncStorage.setItem(THEME_KEY, JSON.stringify(themes));
  } catch (e) {
    console.log('error saving theme');
  }
}