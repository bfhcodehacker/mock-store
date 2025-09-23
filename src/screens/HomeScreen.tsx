import { Text, View } from 'react-native';
import { MainStyles } from '../styles/MainStyles';
import LinearGradient from 'react-native-linear-gradient';

export const HomeScreen = () => {
  return (
    <LinearGradient style={MainStyles.main} colors={['#00008B', '#6e70f3ff']}>
      <Text>Home</Text>
    </LinearGradient>
  );
}