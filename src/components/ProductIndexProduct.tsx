import { Image, Text, TouchableOpacity, View } from 'react-native';
import { Product } from "../types/product";
import { styles } from '../styles/ProductIndex';

interface ProductIndexProductProps {
  product: Product;
  onPress: (product: Product) => () => void;
}

const defaultImage = require('../assets/images/default-product.webp');

export const ProductIndexProduct: React.FC<ProductIndexProductProps> = ({ product, onPress }) => {
  const imageSrc = product?.thumbnail ? { uri: product.thumbnail } : defaultImage;
  return (
    <TouchableOpacity style={styles.productBox} onPress={onPress(product)}>
      <Image source={imageSrc} style={styles.thumbnail} resizeMode='cover' />
      <View style={styles.productTextBox}>
        <View style={styles.productTitleBox}>
          <Text style={styles.productTitle}>{product.title}</Text>
        </View>
        <View style={styles.productInfoBox}>
          <Text style={styles.productPrice}>Price: ${product.price}</Text>
          <Text style={styles.productRating}>Rating: {product.rating}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}