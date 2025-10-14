import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from '../../styles/screens/CustomizeTheme';
import { ThemeText } from '../../reducers/themeData';

interface ThemeEditOptionProps {
  currentColor: string;
  currentFont?: ThemeText;
  editOption: string;
  changeOption: (option: string) => () => void;
}

export const ThemeEditOption: React.FC<ThemeEditOptionProps> = ({
  currentColor, currentFont, editOption, changeOption
}) => {
  return (
    <View style={styles.editRow}>
      <View style={styles.editBox}>
        <Text style={styles.editTitle}>{`${editOption}`}:</Text>
        {currentFont ? (
          <Text style={[styles.editFont, currentFont]}>{editOption}</Text>
        ) : (
          <View style={[styles.editColor, { backgroundColor: currentColor }]} />
        )}
      </View>
      <TouchableOpacity onPress={changeOption(editOption)}>
        <Text style={styles.editBtn}>Edit</Text>
      </TouchableOpacity>
    </View>
  );
}

/*
        <View style={styles.editRow}>
          <View style={styles.editBox}>
            <Text style={styles.editTitle}>PrimaryFont:</Text>
            <Text style={[styles.editFont, primaryFont]}>PrimaryFont</Text>
          </View>
          <TouchableOpacity onPress={changeOption('primaryFont')}>
            <Text style={styles.editBtn}>Edit</Text>
          </TouchableOpacity>
        </View>
        */