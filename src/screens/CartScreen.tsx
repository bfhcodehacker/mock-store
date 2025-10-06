import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { useEffect, useMemo, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { CartItem } from '../components/CartItem';
import {
  addToCart,
  removeFromCart,
  incrementCartQty,
  decrementCartQty
} from '../reducers/cartData';
import { CartProduct } from '../types/cartTypes/cartTypes';
import { Product } from '../types/product';
import { styles } from '../styles/Cart';
import { calculateCartTotal } from '../lib/helpers';
import { CartStackParamList } from '../stacks/CartStack';
import { FeaturedProducts } from '../components/featuredProducts';
import { ATCModal } from '../components/ATCModal';

export const CartScreen = () => {
  const dispatch = useAppDispatch();
  const cartCount = useAppSelector(state => state.cartData.cartCount);
  const items = useAppSelector(state => state.cartData.items);
  const featuredProducts = useAppSelector((state) => state.storeData.cartProducts);
  const navigation = useNavigation<NativeStackNavigationProp<CartStackParamList>>();
  const [productAddedToCart, setProductAddedToCart] = useState<Product | null>(null);

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

  const addToCartPress = (product: Product) => () => {
    dispatch(addToCart({product, qty: 1}));
    setProductAddedToCart(product);
  };

  const closeATCModal = () => {
    setProductAddedToCart(null);
  }

  const navigateToProduct = (product: Product) => () => {
    navigation.navigate('Home' as any, {
      screen: 'ProductDisplay', 
      params: { productId: product.id, name: product.title }
    });
  };

  return (
    <ScrollView style={styles.main}>
      <View style={styles.innerContainer}>
        {items.length ? (
          <View>
            <View style={styles.cartHeader}>
              <Text style={styles.cartCount}>Item Count: {cartCount}</Text>
              <Text style={styles.cartHeaderTotal}>Total: ${cartTotal}</Text>
            </View>
            {items.map(renderCartItem)}
          </View>
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
      {!!featuredProducts.length && (
        <FeaturedProducts
          title={'You Might Also Like'}
          addToCart={addToCartPress}
          navigateToProduct={navigateToProduct}
          products={featuredProducts}
          titleStyle={{color: '#00008b'}}
          descStyle={{color: '#00008b'}}
          boxStyle={{borderColor: '#00008b'}}
        />
      )}
      {!!productAddedToCart && (
        <ATCModal onClose={closeATCModal} product={productAddedToCart} />
      )}
    </ScrollView>
  );
}