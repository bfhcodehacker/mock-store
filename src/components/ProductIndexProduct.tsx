import { Image, Text, TouchableOpacity, View } from 'react-native';
import { Product } from "../types/product";
import { styles } from '../styles/screens/ProductIndex';
import RatingStars from './RatingStars';
import { useAppSelector } from '../app/hooks';

interface ProductIndexProductProps {
  product: Product;
  onPress: (product: Product) => () => void;
  index: number;
}

const defaultImage = require('../assets/images/default-product.webp');

export const ProductIndexProduct: React.FC<ProductIndexProductProps> = ({
  index, product, onPress
}) => {
  const imageSrc = product?.thumbnail ? { uri: product.thumbnail } : defaultImage;
  const theme = useAppSelector(state => state.theme);

  return (
    <TouchableOpacity
      style={[styles.productBox, { backgroundColor: theme.secondaryColor }]}
      onPress={onPress(product)}
      testID={'product-' + index}
    >
      <Image source={imageSrc} style={styles.thumbnail} resizeMode='cover' />
      <View style={styles.productTextBox}>
        <View style={styles.productTitleBox}>
          <Text style={[styles.productTitle, theme.secondaryFont]}>{product.title}</Text>
        </View>
        <View style={styles.productInfoBox}>
          <Text style={[styles.productPrice, theme.secondaryFont]}>Price: ${product.price}</Text>
          {product.rating && (
            <View style={styles.productRatingBox}>
              <Text style={[styles.productRating, theme.secondaryFont]}>Rating: </Text>
              <RatingStars rating={product.rating} color={theme.primaryColor} />
            </View>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
}