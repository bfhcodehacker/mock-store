import { Text, View } from 'react-native';
import { MainStyles } from '../styles/MainStyles';
import { useEffect } from 'react';
import { useAppSelector } from '../app/hooks';
import { useNavigation } from '@react-navigation/native';

export const CartScreen = () => {
  const cartCount = useAppSelector(state => state.cartData.cartCount);
  const navigation = useNavigation();
  useEffect(() => {
    navigation.getParent()?.setOptions({
      tabBarBadge: cartCount ? cartCount : undefined,
    });
  }, [navigation, cartCount]);

  return (
    <View style={MainStyles.main}>
      <Text>Cart</Text>
    </View>
  );
}