import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "../screens/HomeScreen";
import { CategoriesScreen } from "../screens/Categories";
import { ProductIndexScreen } from "../screens/ProductIndex";
import { ProductDisplayScreen } from "../screens/ProductDisplay";


const HomeStack = createNativeStackNavigator();

const HomeScreenStack = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="HomeScreen" options={{headerShown: false}} component={HomeScreen} />
      <HomeStack.Screen name="Categories" component={CategoriesScreen} />
      <HomeStack.Screen name="ProductIndex" component={ProductIndexScreen} />
      <HomeStack.Screen name="ProductDisplay" component={ProductDisplayScreen} />
    </HomeStack.Navigator>
  );
}

export default HomeScreenStack;