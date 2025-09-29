import { ActivityIndicator, Image, Text, View } from 'react-native';
import { useEffect } from 'react';
import { GradientWrapper } from '../components/GradientWrapper';
import { HomeStyles } from '../styles/HomeStyles';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { fetchCategories } from '../reducers/storeData';

import { FeatureCategories } from '../components/FeaturedCategories';
import { Category } from '../types/category';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { HomeStackParamList } from '../stacks/HomeStack';

const titleBackground = require('../assets/images/home-title.jpeg');

export const HomeScreen = () => {
  const dispatch = useAppDispatch();
  const categories = useAppSelector((state) => state.storeData.categories);
  const featuredCategories = useAppSelector((state) => state.storeData.featuredCategories);
  const navigation = useNavigation<NativeStackNavigationProp<HomeStackParamList>>();

  useEffect(() => {
    if (!categories?.length) {
      dispatch(fetchCategories());
    }
  }, []);

  const onCategoryPress = (category: Category) => () => {
    navigation.navigate('ProductIndex', { category });
  }

  const onShopAllPress = () => {
    navigation.navigate('Categories');
  }

  return (
    <GradientWrapper>
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
    </GradientWrapper>
  );
}