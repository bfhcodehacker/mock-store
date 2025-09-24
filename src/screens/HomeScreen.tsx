import { Image, Text, View } from 'react-native';
import { useEffect } from 'react';
import { GradientWrapper } from '../components/GradientWrapper';
import { HomeStyles } from '../styles/HomeStyles';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { fetchCategories } from '../reducers/storeData';

const titleBackground = require('../assets/images/home-title.jpeg');

export const HomeScreen = () => {
  const dispatch = useAppDispatch();
  const store = useAppSelector((state) => state.storeData);

  console.log('render home screen', store);

  useEffect(() => {
    if (!store.categories?.length) {
      dispatch(fetchCategories());
    }
  }, []);

  return (
    <GradientWrapper>
      <View style={HomeStyles.titleImageBox}>
        <Image source={titleBackground} resizeMode='contain' style={HomeStyles.titleImage} />
        <Text style={HomeStyles.titleText}>Mock App</Text>
      </View>
    </GradientWrapper>
  );
}