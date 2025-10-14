import { useEffect, useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { initialThemeState, setNewTheme, ThemeState } from "../reducers/themeData";
import { styles } from "../styles/screens/CustomizeTheme";
import { ThemePreview } from "../components/Theme/ThemePreview";
import { ThemeModal } from "../components/Theme/ThemeModal";
import { useAppDispatch } from "../app/hooks";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { HomeStackParamList } from "../stacks/HomeStack";
import { getThemes, saveNewTheme, updateSavedThemes } from "../lib/themeHelper";
import { ThemeEditOption } from '../components/Theme/ThemeEditOption';
import Ionicons from "@react-native-vector-icons/ionicons";

export const CustomizeTheme = () => {
  const navigation = useNavigation<NativeStackNavigationProp<HomeStackParamList>>();
  const dispatch = useAppDispatch();
  const [editOption, setEditOption] = useState('');
  const [showSavedThemes, setShowSavedThemes] = useState(false);
  const [updatedTheme, setUpdatedTheme] = useState<ThemeState>({...initialThemeState});
  const [savedThemes, setSavedThemes] = useState<ThemeState[]>();
  const { primaryColor, primaryEndColor, primaryFont, secondaryColor, secondaryFont } = updatedTheme;

  const fetchThemes = async () => {
    const saved = await getThemes();
    if (saved.length) {
      const newTheme = saved[0];
      setUpdatedTheme(newTheme);
      setSavedThemes([{...initialThemeState}, ...saved]);
    }
  }

  useEffect(() => {
    fetchThemes();
  }, []);

  const changeOption = (option: string) => () => {
    const value = updatedTheme[option as keyof ThemeState];
    if (value) {
      setEditOption(option);
    }
  }

  const toggleShowSavedThemes = () => {
    setShowSavedThemes(!showSavedThemes);
  }

  const useSavedTheme = (index: number) => () => {
    if (savedThemes?.[index]) {
      dispatch(setNewTheme({...savedThemes[index]}));
      setUpdatedTheme({...savedThemes[index]});
    }
  }

  const deleteTheme = (index: number) => () => {
    if (savedThemes) {
      const changedThemes = [...savedThemes];
      changedThemes.splice(index, 1);
      if (changedThemes) {
        setSavedThemes(changedThemes);
        setUpdatedTheme(changedThemes[0]);
        dispatch(setNewTheme({...changedThemes[0]}));
        if (changedThemes.length > 1) {
          updateSavedThemes(changedThemes);
        } else {
          updateSavedThemes([]);
        }
      }
    }
  }

  const saveTheme = () => {
    dispatch(setNewTheme(updatedTheme));
    saveNewTheme(updatedTheme);
    navigation.goBack();
  }

  const updateTheme = (data: any) => {
    const newTheme = { ...updatedTheme };
    newTheme[editOption as keyof ThemeState] = data;
    setUpdatedTheme(newTheme);
    closeModal();
  }

  const closeModal = () => {
    setEditOption('');
  }

  const closeScreen = () => {
    navigation.goBack();
  }

  return (
    <ScrollView style={styles.container} scrollEnabled={!editOption}>
      <Text style={styles.title}>Customize Your App!</Text>
      {(savedThemes && savedThemes?.length > 1) && (
        <View style={styles.savedThemesBox}>
          <TouchableOpacity onPress={toggleShowSavedThemes} style={styles.savedThemesHeader}>
            <Text style={styles.savedThemesTitle}>Saved Themes</Text>
            <Ionicons name={showSavedThemes ? 'caret-up' : 'caret-down'} size={20} />
          </TouchableOpacity>
          {showSavedThemes && (
            <View style={styles.savedThemeBox}>
              {savedThemes.map((theme: ThemeState, index: number) => {
                return (
                  <View style={styles.savedThemeRow} key={theme.primaryColor + index}>
                    <TouchableOpacity onPress={useSavedTheme(index)} style={styles.savedThemeLeft}>
                      <Text style={styles.savedThemeText}>Primary Color:</Text>
                      <View style={[styles.savedThemeColor, {backgroundColor: theme.primaryColor}]} />
                    </TouchableOpacity>
                    {index !== 0 && (
                      <TouchableOpacity onPress={deleteTheme(index)}>
                        <Ionicons name='trash' size={20} />
                      </TouchableOpacity>
                    )}
                  </View>
                );
              })}
            </View>
          )}
        </View>
      )}
      <View style={styles.topContainer}>
        <ThemeEditOption
          currentColor={primaryColor}
          editOption='primaryColor'
          changeOption={changeOption}
        />
        <ThemeEditOption
          currentColor={primaryEndColor}
          editOption='primaryEndColor'
          changeOption={changeOption}
        />
        <ThemeEditOption
          currentColor={primaryFont.color}
          editOption='primaryFont'
          currentFont={primaryFont}
          changeOption={changeOption}
        />
        <ThemeEditOption
          currentColor={secondaryColor}
          editOption='secondaryColor'
          changeOption={changeOption}
        />
        <ThemeEditOption
          currentColor={secondaryFont.color}
          editOption='secondaryFont'
          currentFont={secondaryFont}
          changeOption={changeOption}
        />
      </View>
      <View style={styles.previewContainer}>
        <ThemePreview
          primaryColor={primaryColor}
          primaryFont={primaryFont}
          primaryColorEnd={primaryEndColor}
          secondaryColor={secondaryColor}
          secondaryFont={secondaryFont}
        />
      </View>
      <TouchableOpacity onPress={saveTheme} style={styles.saveThemeBtn}>
        <Text style={styles.saveThemeBtnText}>Save Theme</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={closeScreen} style={styles.saveThemeBtn}>
        <Text style={styles.saveThemeBtnText}>Close</Text>
      </TouchableOpacity>
      {!!editOption && (
        <ThemeModal
          theme={updatedTheme}
          editOption={editOption}
          updateTheme={updateTheme}
          closeModal={closeModal}
        />
      )}
    </ScrollView>
  )
}