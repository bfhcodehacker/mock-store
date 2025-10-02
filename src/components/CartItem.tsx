import { Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "../styles/CartItem";
import { CartProduct } from "../types/cartTypes/cartTypes";
import Ionicons from "@react-native-vector-icons/ionicons";

interface CartItemProps {
  item: CartProduct;
  increment: (productId: number) => void;
  decrement: (id: number) => void;
  remove: (id: number) => void;
}

const defaultImage = require('../assets/images/default-product.webp');

export const CartItem: React.FC<CartItemProps> = ({ item, increment, decrement, remove }) => {
  const imageSrc = item.thumbnail ? { uri: item.thumbnail } : defaultImage;

  const incrementQty = () => {
    if (item.id) {
      increment(item.id);
    }
  }

  const decrementQty = () => {
    if (item.id) {
      if (item.qty > 1) {
        decrement(item.id);
      } else {
        remove(item.id);
      }
    }
  }

  const removeItem = () => {
    if (item.id) {
      remove(item.id);
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Image source={imageSrc} resizeMode='contain' style={styles.image} />
        <View style={styles.itemInfo}>
          <Text style={styles.titleText} numberOfLines={2}>{item.title}</Text>
          <View style={styles.itemPriceQty}>
            <Text style={styles.priceText}>${item.price} each</Text>
            <Text style={styles.priceText}>Quantity: {item.qty}</Text>
          </View>
        </View>
      </View>
      <View style={styles.qtyEditBox}>
        <View style={styles.qtyTotalBox}>
          {!!item.price && (
            <Text style={styles.itemTotalPrice}>
              Total: ${(item.price * item.qty).toFixed(2)}
            </Text>
          )}
          <View style={styles.stepperBox}>
            <TouchableOpacity
              onPress={decrementQty}
              style={styles.stepperIcon}
            >
              {item.qty > 1 ? (
                <Ionicons name='remove' size={20} color={'#FFF'} />
              ) : (
                <Ionicons name='trash-outline' size={20} color={'#fff'} />
              )}
            </TouchableOpacity>
            <Text style={styles.stepperQty}>{item.qty}</Text>
            <TouchableOpacity
              onPress={incrementQty}
              style={styles.stepperIcon}
            >
              <Ionicons name='add' size={20} color={'#FFF'} />
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity
          onPress={removeItem}
          style={styles.removeItem}
        >
          <Ionicons name='trash-outline' size={20} color={'#fff'} />
        </TouchableOpacity>
      </View>
    </View>
  );
}