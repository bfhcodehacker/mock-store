import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { useEffect, useMemo } from 'react';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { CartItem } from '../components/CartItem';
import {
  removeFromCart,
  incrementCartQty,
  decrementCartQty
} from '../reducers/cartData';
import { CartProduct } from '../types/cartTypes/cartTypes';
import { styles } from '../styles/Cart';
import { calculateCartTotal } from '../lib/helpers';
import { CartStackParamList } from '../stacks/CartStack';

export const CartScreen = () => {
  const dispatch = useAppDispatch();
  const cartCount = useAppSelector(state => state.cartData.cartCount);
  const items = useAppSelector(state => state.cartData.items);
  const navigation = useNavigation<NativeStackNavigationProp<CartStackParamList>>();

  useEffect(() => {
    navigation.getParent()?.setOptions({
      tabBarBadge: cartCount ? cartCount : undefined,
    });
  }, [navigation, cartCount]);

  const cartTotal = useMemo(() => calculateCartTotal(items), [items]);

  const incrementCartItem = (id: number) => {
    dispatch(incrementCartQty({ productId: id }));
  };

  const decrementCartItem = (id: number) => {
    dispatch(decrementCartQty({ productId: id }));
  };

  const removeCartItem = (id: number) => {
    dispatch(removeFromCart({ productId: id }));
  };

  const renderCartItem = (item: CartProduct) => {
    return (
      <CartItem 
        item={item}
        key={item.title} 
        increment={incrementCartItem}
        decrement={decrementCartItem}
        remove={removeCartItem}    
      />
    );
  };

  const goToHomeTab = () => {
    navigation.navigate('Home' as any);
  };

  return (
    <View style={styles.main}>
      <View style={styles.innerContainer}>
        {items.length ? (
          <ScrollView>
            <View style={styles.cartHeader}>
              <Text style={styles.cartCount}>Item Count: {cartCount}</Text>
              <Text style={styles.cartHeaderTotal}>Total: ${cartTotal}</Text>
            </View>
            {items.map(renderCartItem)}
          </ScrollView>
        ) : (
          <View style={styles.emptyCart}>
            <Text style={styles.emptyCartText}>There are no items in the cart</Text>
            <TouchableOpacity
              onPress={goToHomeTab}
              style={styles.continueShoppingBtn}
            >
              <Text style={styles.continueShoppingText}>Continue Shopping</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </View>
  );
}