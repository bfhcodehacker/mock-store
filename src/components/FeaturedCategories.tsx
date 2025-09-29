import { Text, TouchableOpacity, View } from 'react-native';
import { Category } from '../types/category';
import Ionicons from '@react-native-vector-icons/ionicons';
import { categoryIcons } from '../constants/categoryIcons';
import { styles } from '../styles/FeaturedCategories';

interface FeaturedCategoriesProps {
  categories: Category[];
  onPress: (category: Category) => () => void;
  onShopAllPress: () => void;
}

export const FeatureCategories: React.FC<FeaturedCategoriesProps> = ({ categories, onPress, onShopAllPress }) => {
  return (
    <View style={styles.outerContainer}>
      <Text style={styles.titleText}>Featured Categories</Text>
      <View style={styles.container}>
        {categories.map(category => {
          return (
            <TouchableOpacity style={styles.box} onPress={onPress(category)} key={category.slug}>
              <Ionicons name={categoryIcons[category?.slug || 'default']} size={30} color='#00008B' />
              <Text style={styles.text}>{category.name}</Text>
            </TouchableOpacity>
          )
        })}
      </View>
      <TouchableOpacity onPress={onShopAllPress} style={styles.shopAllLink}>
        <Text style={styles.shopAllText}>{'Shop All Categories >'}</Text>
      </TouchableOpacity>
    </View>
  );
}