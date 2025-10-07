import { Text, TouchableOpacity, ViewStyle } from "react-native";
import Ionicons from "@react-native-vector-icons/ionicons";
import { Category } from "../types/category";
import { categoryIcons } from "../constants/categoryIcons";
import { styles } from "../styles/components/FeaturedCategories";

interface FeaturedCategoryProps {
  category: Category;
  onPress: (category: Category) => () => void;
  boxStyle?: ViewStyle;
}

export const FeaturedCategory: React.FC<FeaturedCategoryProps> = ({boxStyle, category, onPress}) => {
  return (
    <TouchableOpacity style={[styles.box, boxStyle]} onPress={onPress(category)}>
      <Ionicons name={categoryIcons[category?.slug || 'default']} size={30} color='#00008B' />
      <Text style={styles.text}>{category.name}</Text>
    </TouchableOpacity>
  );
}