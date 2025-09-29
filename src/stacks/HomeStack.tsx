import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "../screens/HomeScreen";
import { CategoriesScreen } from "../screens/Categories";
import { ProductIndexScreen } from "../screens/ProductIndex";
import { ProductDisplayScreen } from "../screens/ProductDisplay";
import { Category } from "../types/category";
import Ionicons from "@react-native-vector-icons/ionicons";

export type HomeStackParamList = {
  HomeScreen: undefined;
  Categories: undefined;
  ProductIndex: { category: Category };
  ProductDisplay: undefined;
};

const HomeStack = createNativeStackNavigator<HomeStackParamList>();

const HomeScreenStack = () => {
  return (
    <HomeStack.Navigator
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
      <HomeStack.Screen name="HomeScreen" options={{headerShown: false}} component={HomeScreen} />
      <HomeStack.Screen name="Categories" component={CategoriesScreen} />
      <HomeStack.Screen name="ProductIndex" component={ProductIndexScreen} />
      <HomeStack.Screen name="ProductDisplay" component={ProductDisplayScreen} />
    </HomeStack.Navigator>
  );
}

export default HomeScreenStack;