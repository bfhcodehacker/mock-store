import { View, Text, ViewStyle, TextStyle, FlatList, Image, TouchableOpacity } from "react-native"
import { Product } from "../types/product"
import { styles } from "../styles/featuredProducts";

interface FeaturedProductsProps {
  products: Product[];
  addToCart: (product: Product) => () => void;
  navigateToProduct: (product: Product) => () => void;
  title: string;
  cartFeaturedProducts?: boolean;
  containerStyle?: ViewStyle;
  titleStyle?: TextStyle;
  descStyle?: TextStyle;
  boxStyle?: ViewStyle;
}

interface ListItem {
  item: Product;
  index: number;
}
const defaultImage = require('../assets/images/default-product.webp');

export const FeaturedProducts: React.FC<FeaturedProductsProps> = ({
  products, addToCart, title, titleStyle, containerStyle, descStyle, boxStyle, navigateToProduct
}) => {

  const renderProduct = (item: ListItem): React.JSX.Element => {
    const product = item.item;
    const imageSrc = product.thumbnail ? { uri: product.thumbnail } : defaultImage;

    return (
      <View style={[styles.productBox, boxStyle]}>
        <TouchableOpacity onPress={navigateToProduct(product)} style={styles.navLink}>
          <Image source={imageSrc} style={styles.image} resizeMode='cover' />
          <Text style={[styles.productTitle, descStyle]} numberOfLines={2}>{product.title}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={addToCart(product)} style={styles.addToCartBtn}>
          <Text style={styles.addToCartText}>Add To Cart</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={[styles.container, containerStyle]}>
      <Text style={[styles.title, titleStyle]}>{title}</Text>
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