import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { CartScreen } from "../screens/CartScreen";
import { CheckoutScreen } from "../screens/Checkout";


const CartStack = createNativeStackNavigator();

const CartScreenStack = () => {
  return (
    <CartStack.Navigator>
      <CartStack.Screen name="CartScreen" component={CartScreen} />
      <CartStack.Screen name="Checkout" component={CheckoutScreen} />
    </CartStack.Navigator>
  );
}

export default CartScreenStack;