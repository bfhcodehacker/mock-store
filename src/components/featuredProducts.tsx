import { View, Text, ViewStyle, TextStyle, FlatList, Image, TouchableOpacity } from "react-native"
import { Product } from "../types/product"
import { styles } from "../styles/featuredProducts";

interface FeaturedProductsProps {
  products: Product[];
  addToCart: (product: Product) => void;
  title: string;
  containerStyle?: ViewStyle;
  titleStyle?: TextStyle;
}

interface ListItem {
  item: Product;
  index: number;
}
const defaultImage = require('../assets/images/default-product.webp');

export const FeaturedProducts: React.FC<FeaturedProductsProps> = ({ products, addToCart, title}) => {
  const addItemToCart = (product: Product) => () => {
    addToCart(product);
  }

  const renderProduct = (item: ListItem): React.JSX.Element => {
    const product = item.item;
    const imageSrc = product.thumbnail ? { uri: product.thumbnail } : defaultImage;

    return (
      <View style={styles.productBox}>
        <Image source={imageSrc} style={styles.image} resizeMode='cover' />
        <Text style={styles.productTitle} numberOfLines={2}>{product.title}</Text>
        <TouchableOpacity onPress={addItemToCart(product)} style={styles.addToCartBtn}>
          <Text style={styles.addToCartText}>Add To Cart</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.productContainer}>
        <FlatList
          data={products}
          renderItem={renderProduct}
          keyExtractor={(item, index) => item.title || `key-${index}`}
          horizontal={true}
        />
      </View>
    </View>
  )
}