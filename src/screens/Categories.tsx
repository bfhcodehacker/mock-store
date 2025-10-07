import { ScrollView, View } from 'react-native';
import { GradientWrapper } from '../components/GradientWrapper';
import { useAppSelector } from '../app/hooks';
import { FeaturedCategory } from '../components/FeaturedCategory';
import { Category } from '../types/category';
import { useNavigation } from '@react-navigation/native';
import { HomeStackParamList } from '../stacks/HomeStack';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { styles } from '../styles/screens/Categories';

export const CategoriesScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<HomeStackParamList>>();
  const categories = useAppSelector((state) => state.storeData.categories);

  const onPress = (category: Category) => () => {
    navigation.navigate('ProductIndex', { category });
  }

  return (
    <GradientWrapper>
      <ScrollView style={styles.scrollView}>
        <View style={styles.container}>
        {categories.map(category => {
          return <FeaturedCategory
            onPress={onPress}
            category={category}
            key={category.slug}
            boxStyle={styles.boxStyle}
          />
        })}
        </View>
      </ScrollView>
    </GradientWrapper>
  );
}