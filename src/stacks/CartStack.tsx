import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { CartScreen } from "../screens/CartScreen";
import { CheckoutScreen } from "../screens/Checkout";
import { getHeaderTitle } from '@react-navigation/elements';
import { NavHeader } from "../components/NavHeader";

export type CartStackParamList = {
  CartScreen: undefined;
  Checkout: undefined;
};

const CartStack = createNativeStackNavigator<CartStackParamList>();

const CartScreenStack = () => {
  return (
    <CartStack.Navigator
      screenOptions={{
        header: ({ navigation, route, options, back }) => {
          const title = getHeaderTitle(options, route.name);

          return (
            <NavHeader
              title={title}
              goBack={back ? navigation.goBack : undefined}
            />
          );
        }
      }}
    >
      <CartStack.Screen name="CartScreen" component={CartScreen} options={{title: 'Cart'}} />
      <CartStack.Screen name="Checkout" component={CheckoutScreen} />
    </CartStack.Navigator>
  );
}

export default CartScreenStack;