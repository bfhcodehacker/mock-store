import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { ThemeState, ThemeText } from "../../reducers/themeData";
import { styles } from "../../styles/components/ThemeModal";
import { ThemePreview } from "./ThemePreview";
import ColorPicker from 'react-native-wheel-color-picker';
import { useState } from 'react';
import { appFonts, appFontsNames } from '../../constants/fonts';
 
interface ThemeModalProps {
  theme: ThemeState;
  editOption: string;
  updateTheme: (data: any) => void;
  closeModal: () => void;
}
 
export const ThemeModal: React.FC<ThemeModalProps> = ({
  theme, editOption, updateTheme, closeModal
}) => {

  const value = theme[editOption as keyof ThemeState];
  let startColor = '';
  let startFont = '';
  if (typeof value === 'string') {
    startColor = value;
  } else if (value) {
    startColor = value.color;
    startFont = value.fontFamily;
  }

  const [newColor, setNewColor] = useState(startColor);
  const [newFont, setNewFont] = useState(startFont);
  const isFont = editOption.includes('Font');

  const onColorChange = (color: string) => {
    setNewColor(color);
  };

  const saveTheme = () => {
    if (isFont) {
      updateTheme({
        fontFamily: newFont,
        color: newColor
      });
    } else {
      updateTheme(newColor);
    }
  }

  const updateFont = (name: string) => () => {
    setNewFont(appFonts[name]);
  }

  const renderFonts = () => {
    return (
      <View>
        <Text style={styles.fontListHeader}>Choose a font:</Text>
        <View style={styles.fontList}>
          {appFontsNames.map((name: string) => {
            return (
              <TouchableOpacity onPress={updateFont(name)} key={name}>
                <Text style={[styles.font, {fontFamily: appFonts[name]}]}>
                  {name}
                </Text>
              </TouchableOpacity>
            )
          })}
        </View>
      </View>
    )
  }

  const renderThemePreview = () => {
    const newTheme: any = {...theme};
    if (isFont) {
      newTheme[editOption] = { fontFamily: newFont, color: newColor };
    } else {
      newTheme[editOption] = newColor;
    }
    const { primaryColor, primaryFont, primaryEndColor, secondaryColor, secondaryFont } = newTheme;

    return (
      <ThemePreview
        primaryColor={primaryColor}
        primaryFont={primaryFont}
        primaryColorEnd={primaryEndColor}
        secondaryColor={secondaryColor}
        secondaryFont={secondaryFont}
      />
    );
  }

  return (
    <View style={styles.modalBackdrop}>
      <ScrollView style={styles.modalContainer}>
        <View style={styles.modalTop}>
          <Text style={styles.previewText}>
            Updating: <Text style={styles.bold}>{editOption}</Text>
          </Text>
          <View style={styles.previewBox}>
            <Text style={styles.previewHeader}>Preview:</Text>
            {isFont ? (
              <Text style={[styles.editFont, { fontFamily: newFont, color: newColor }]}>
                New Font
              </Text>
            ): (
              <View style={[styles.editColor, { backgroundColor: newColor }]} />
            )}
          </View>
        </View>
        {isFont && renderFonts()}
        <View style={styles.pickerBox}>
          <ColorPicker
            color={newColor}
            onColorChange={onColorChange}
            sliderSize={30}
            noSnap={true}
            row={false}
            swatches={false}
            gapSize={0}
          />            
        </View>
        <View style={styles.previewContainer}>
          {renderThemePreview()}
        </View>
        <TouchableOpacity onPress={saveTheme} style={styles.saveThemeBtn}>
          <Text style={styles.saveThemeBtnText}>Save</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={closeModal} style={[styles.saveThemeBtn, styles.bottom]}>
          <Text style={styles.saveThemeBtnText}>Cancel</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}