import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from '../styles/components/HomeHeader';
import { useAppSelector } from '../app/hooks';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { HomeStackParamList } from '../stacks/HomeStack';

export const HomeHeader: React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<HomeStackParamList>>();
  const theme = useAppSelector(state => state.theme);
  const signInData = useAppSelector(state => state.account.signInData);
  const firstName = signInData?.firstName;
  const welcomeText = firstName ? `Welcome ${firstName}!` : 'Welcome!';

  const goToCustomizeTheme = () => {
    navigation.navigate('CustomizeTheme');
  }

  return (
    <View style={styles.headerBox}>
      <Text style={[styles.welcomeText, theme.primaryFont]}>{welcomeText}</Text>
      <TouchableOpacity
        onPress={goToCustomizeTheme}
        style={[styles.customizeBtn, {backgroundColor: theme.secondaryColor}]}
      >
        <Text style={[styles.customizeBtnText, theme.secondaryFont]}>
          Customize App
        </Text>  
      </TouchableOpacity> 
    </View>
  );
}