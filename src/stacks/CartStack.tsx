import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { CartScreen } from "../screens/CartScreen";
import { CheckoutScreen } from "../screens/Checkout";

export type CartStackParamList = {
  CartScreen: undefined;
  Checkout: undefined;
};

const CartStack = createNativeStackNavigator<CartStackParamList>();

const CartScreenStack = () => {
  return (
    <CartStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#00008B'
        },
        headerTitleAlign: 'center',
        headerTitleStyle: {
          color: '#fff'
        },
        headerTintColor: '#fff'
      }}    
    >
      <CartStack.Screen name="CartScreen" component={CartScreen} options={{title: 'Cart'}} />
      <CartStack.Screen name="Checkout" component={CheckoutScreen} />
    </CartStack.Navigator>
  );
}

export default CartScreenStack;