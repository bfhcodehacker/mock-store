import { TouchableOpacity, Text, View } from 'react-native';
import Ionicons from "@react-native-vector-icons/ionicons";
import { styles } from '../styles/components/HomeHeader';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { HomeStackParamList } from '../stacks/HomeStack';

export const HomeHeader: React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<HomeStackParamList>>();

  return (
    <View style={styles.headerBox}>
      <Text style={styles.welcomeText}>Welcome!</Text>
    </View>
  );
}