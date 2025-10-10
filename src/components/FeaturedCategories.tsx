import { Text, TouchableOpacity, View } from 'react-native';
import { Category } from '../types/category';
import { styles } from '../styles/components/FeaturedCategories';
import { FeaturedCategory } from './FeaturedCategory';
import { useAppSelector } from '../app/hooks';

interface FeaturedCategoriesProps {
  categories: Category[];
  onPress: (category: Category) => () => void;
  onShopAllPress: () => void;
}

export const FeatureCategories: React.FC<FeaturedCategoriesProps> = ({ categories, onPress, onShopAllPress }) => {
  const theme = useAppSelector(state => state.theme);

  return (
    <View style={styles.outerContainer}>
      <View style={styles.header}>
        <Text style={[styles.titleText, theme.primaryFont]}>Featured Categories</Text>
        <TouchableOpacity onPress={onShopAllPress} style={styles.shopAllLink}>
          <Text style={[styles.shopAllText, theme.primaryFont]}>{'Shop All >'}</Text>
        </TouchableOpacity>
      </View>
      <View style={[styles.container, { borderColor: theme.secondaryColor }]}>
        {categories.map(category => {
          return <FeaturedCategory onPress={onPress} category={category} key={category.slug} />
        })}
      </View>
    </View>
  );
}