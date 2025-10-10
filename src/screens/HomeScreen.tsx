import { ActivityIndicator, Image, ScrollView, Text, View } from 'react-native';
import { useEffect, useState } from 'react';
import { GradientWrapper } from '../components/GradientWrapper';
import { HomeStyles } from '../styles/screens/HomeStyles';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { fetchCategories, fetchProducts } from '../reducers/storeData';

import { FeatureCategories } from '../components/FeaturedCategories';
import { Category } from '../types/category';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { HomeStackParamList } from '../stacks/HomeStack';
import { FeaturedProducts } from '../components/FeaturedProducts';
import { addToCart } from '../reducers/cartData';
import { Product } from '../types/product';
import { ATCModal } from '../components/ATCModal';
import { HomeHeader } from '../components/HomeHeader';
import { useSavedCredentials } from '../lib/authHelpers';

const titleBackground = require('../assets/images/home-title.jpeg');

export const HomeScreen = () => {
  const dispatch = useAppDispatch();
  const featuredCategories = useAppSelector(state => state.storeData.featuredCategories);
  const featuredProducts = useAppSelector(state => state.storeData.featuredProducts);
  const isLoggedIn = useAppSelector(state => state.account.isLoggedIn);
  const navigation = useNavigation<NativeStackNavigationProp<HomeStackParamList>>();
  const [ productAddedToCart, setProductAddedToCart ] = useState<Product | null>(null);

  useEffect(() => {
    if (!featuredCategories?.length) {
      dispatch(fetchCategories());
      dispatch(fetchProducts());
    }
    if (!isLoggedIn) {
      useSavedCredentials(dispatch);
    }
  }, []);

  const onCategoryPress = (category: Category) => () => {
    navigation.navigate('ProductIndex', { category });
  };

  const onShopAllPress = () => {
    navigation.navigate('Categories');
  };

  const addToCartPress = (product: Product) => () => {
    dispatch(addToCart({product, qty: 1}));
    setProductAddedToCart(product);
  };

  const closeATCModal = () => {
    setProductAddedToCart(null);
  }

  const onProductNavigation = (product: Product) => () => {
    navigation.navigate('ProductDisplay', { productId: product.id, name: product.title });
  };

  return (
    <GradientWrapper>
      <ScrollView>
        <HomeHeader />
        <View style={HomeStyles.titleImageBox}>
          <Image source={titleBackground} resizeMode='contain' style={HomeStyles.titleImage} />
          <Text style={HomeStyles.titleText}>Mock App</Text>
        </View>
        {!!featuredCategories.length ? (
          <FeatureCategories
            categories={featuredCategories}
            onPress={onCategoryPress}
            onShopAllPress={onShopAllPress}
          />
        ) : (
          <ActivityIndicator />
        )}
        {!!featuredProducts.length && (
          <FeaturedProducts
            title={'Featured Products'}
            addToCart={addToCartPress}
            products={featuredProducts}
            navigateToProduct={onProductNavigation}
          />
        )}
      </ScrollView>
      {!!productAddedToCart && (
        <ATCModal product={productAddedToCart} onClose={closeATCModal} />
      )}
    </GradientWrapper>
  );
}