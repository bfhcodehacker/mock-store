import { ScrollView, Text, View } from 'react-native';
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
  const theme = useAppSelector(state => state.theme);

  const onPress = (category: Category) => () => {
    navigation.navigate('ProductIndex', { category });
  }

  return (
    <GradientWrapper>
      <ScrollView style={styles.scrollView}>
        <Text style={[styles.title, theme.primaryFont]}>Shop Our Categories!</Text>
        <View style={styles.container}>
          {categories.map((category, index) => {
            return <FeaturedCategory
              onPress={onPress}
              category={category}
              key={category.slug}
              boxStyle={styles.boxStyle}
              testId={'category-' + index}
            />
          })}
        </View>
      </ScrollView>
    </GradientWrapper>
  );
}