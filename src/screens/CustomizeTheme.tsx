import { useState } from "react"
import { Text, TouchableOpacity, View } from "react-native"
import { initialThemeState, setNewTheme, ThemeState } from "../reducers/themeData";
import { styles } from "../styles/screens/CustomizeTheme";
import { ThemePreview } from "../components/ThemePreview";
import { ThemeModal } from "../components/ThemeModal";
import { useAppDispatch } from "../app/hooks";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { HomeStackParamList } from "../stacks/HomeStack";

export const CustomizeTheme = () => {
  const navigation = useNavigation<NativeStackNavigationProp<HomeStackParamList>>();
  const dispatch = useAppDispatch();
  const [editOption, setEditOption] = useState('');
  const [updatedTheme, setUpdatedTheme] = useState<ThemeState>({...initialThemeState});
  const { primaryColor, primaryEndColor, primaryFont, secondaryColor, secondaryFont } = updatedTheme;

  const changeOption = (option: string) => () => {
    const value = updatedTheme[option as keyof ThemeState];
    if (value) {
      setEditOption(option);
    }
  }

  const saveTheme = () => {
    dispatch(setNewTheme(updatedTheme));
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

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Customize Your App!</Text>
      <View style={styles.topContainer}>
        <View style={styles.editRow}>
          <View style={styles.editBox}>
            <Text style={styles.editTitle}>PrimaryColor:</Text>
            <View style={[styles.editColor, { backgroundColor: primaryColor }]} />
          </View>
          <TouchableOpacity onPress={changeOption('primaryColor')}>
            <Text style={styles.editBtn}>Edit</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.editRow}>
          <View style={styles.editBox}>
            <Text style={styles.editTitle}>PrimaryColorEnd:</Text>
            <View style={[styles.editColor, { backgroundColor: primaryEndColor }]} />
          </View>
          <TouchableOpacity onPress={changeOption('primaryEndColor')}>
            <Text style={styles.editBtn}>Edit</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.editRow}>
          <View style={styles.editBox}>
            <Text style={styles.editTitle}>PrimaryFont:</Text>
            <Text style={[styles.editFont, primaryFont]}>PrimaryFont</Text>
          </View>
          <TouchableOpacity onPress={changeOption('primaryFont')}>
            <Text style={styles.editBtn}>Edit</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.editRow}>
          <View style={styles.editBox}>
            <Text style={styles.editTitle}>SecondaryColor:</Text>
            <View style={[styles.editColor, { backgroundColor: secondaryColor }]} />
          </View>
          <TouchableOpacity onPress={changeOption('secondaryColor')}>
            <Text style={styles.editBtn}>Edit</Text>
          </TouchableOpacity>
        </View>
       <View style={styles.editRow}>
          <View style={styles.editBox}>
            <Text style={styles.editTitle}>SecondaryFont:</Text>
            <Text style={[styles.editFont, secondaryFont]}>SecondaryFont</Text>
          </View>
          <TouchableOpacity onPress={changeOption('secondaryFont')}>
            <Text style={styles.editBtn}>Edit</Text>
          </TouchableOpacity>
        </View>
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
      {!!editOption && (
        <ThemeModal
          theme={updatedTheme}
          editOption={editOption}
          updateTheme={updateTheme}
          closeModal={closeModal}
        />
      )}
    </View>
  )
}