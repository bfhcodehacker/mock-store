import { Image, TouchableOpacity, Text, View } from 'react-native';
import { Product } from "../types/product";
import { styles } from '../styles/components/ATCModal';

interface ATCModalProps {
  product?: Product;
  onClose: () => void;
}

export const ATCModal: React.FC<ATCModalProps> = ({ product, onClose }) => {
  return (
    <View style={styles.modalBackdrop}>
      <View style={styles.addedToCartModal}>
        <Text style={styles.addedToCartModalText}>Item added to cart!</Text>
        {!!product?.thumbnail && (
          <Image source={{ uri: product.thumbnail }} resizeMode='cover' style={styles.modalImage} />
        )}
        {!!product?.title && (
          <Text numberOfLines={2} style={styles.modalItemTitle}>{product.title}</Text>
        )}
        <TouchableOpacity onPress={onClose} style={styles.closeModalBtn}>
          <Text style={styles.closeModalBtnText}>Close</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}