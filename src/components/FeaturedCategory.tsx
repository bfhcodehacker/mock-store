import { Text, TouchableOpacity, ViewStyle } from "react-native";
import Ionicons from "@react-native-vector-icons/ionicons";
import { Category } from "../types/category";
import { categoryIcons } from "../constants/categoryIcons";
import { styles } from "../styles/components/FeaturedCategories";
import { useAppSelector } from "../app/hooks";

interface FeaturedCategoryProps {
  category: Category;
  onPress: (category: Category) => () => void;
  boxStyle?: ViewStyle;
}

export const FeaturedCategory: React.FC<FeaturedCategoryProps> = ({boxStyle, category, onPress}) => {
  const theme = useAppSelector(state => state.theme);
  return (
    <TouchableOpacity
      style={[styles.box, {backgroundColor: theme.secondaryColor}, boxStyle]}
      onPress={onPress(category)}
    >
      <Ionicons
        name={categoryIcons[category?.slug || 'default']}
        size={30}
        color={theme.primaryColor}
      />
      <Text style={[styles.text, theme.secondaryFont]}>{category.name}</Text>
    </TouchableOpacity>
  );
}