import { ActivityIndicator, Image, ScrollView, Text, View } from 'react-native';
import { useEffect } from 'react';
import { GradientWrapper } from '../components/GradientWrapper';
import { HomeStyles } from '../styles/HomeStyles';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { fetchCategories, fetchProducts } from '../reducers/storeData';

import { FeatureCategories } from '../components/FeaturedCategories';
import { Category } from '../types/category';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { HomeStackParamList } from '../stacks/HomeStack';
import { FeaturedProducts } from '../components/featuredProducts';
import { addToCart } from '../reducers/cartData';
import { Product } from '../types/product';

const titleBackground = require('../assets/images/home-title.jpeg');

export const HomeScreen = () => {
  const dispatch = useAppDispatch();
  const featuredCategories = useAppSelector((state) => state.storeData.featuredCategories);
  const featuredProducts = useAppSelector((state) => state.storeData.featuredProducts);
  const navigation = useNavigation<NativeStackNavigationProp<HomeStackParamList>>();

  useEffect(() => {
    if (!featuredCategories?.length) {
      dispatch(fetchCategories());
      dispatch(fetchProducts());
    }
  }, []);

  const onCategoryPress = (category: Category) => () => {
    navigation.navigate('ProductIndex', { category });
  }

  const onShopAllPress = () => {
    navigation.navigate('Categories');
  }

  const addToCartPress = (product: Product) => {
    dispatch(addToCart({product, qty: 1}));
  }

  return (
    <GradientWrapper>
      <ScrollView>
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
          />
        )}
      </ScrollView>
    </GradientWrapper>
  );
}