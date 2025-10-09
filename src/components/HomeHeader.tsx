import { Text, View } from 'react-native';
import { styles } from '../styles/components/HomeHeader';
import { useAppSelector } from '../app/hooks';

export const HomeHeader: React.FC = () => {
  const signInData = useAppSelector(state => state.account.signInData);
  const firstName = signInData?.firstName;
  const welcomeText = firstName ? `Welcome ${firstName}!` : 'Welcome!';

  return (
    <View style={styles.headerBox}>
      <Text style={styles.welcomeText}>{welcomeText}</Text>
    </View>
  );
}