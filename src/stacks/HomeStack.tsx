import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "../screens/HomeScreen";
import { CategoriesScreen } from "../screens/Categories";
import { ProductIndexScreen } from "../screens/ProductIndex";
import { ProductDisplayScreen } from "../screens/ProductDisplay";
import { AccountScreen } from "../screens/Account";
import { Category } from "../types/category";

export type HomeStackParamList = {
  HomeScreen: undefined;
  Categories: undefined;
  ProductIndex: { category: Category };
  ProductDisplay: { productId?: number, name?: string };
  Account: undefined;
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
      <HomeStack.Group>
        <HomeStack.Screen name="HomeScreen" options={{headerShown: false}} component={HomeScreen} />
        <HomeStack.Screen name="Categories" component={CategoriesScreen} />
        <HomeStack.Screen
          name="ProductIndex"
          component={ProductIndexScreen}
          options={({ route }) => ({
            title: route.params?.category?.name || 'Product Index'
          })}
        />
        <HomeStack.Screen
          name="ProductDisplay"
          component={ProductDisplayScreen}
          options={({ route }) => ({
            title: route.params?.name || 'Product Display'
          })}
        />
      </HomeStack.Group>
      <HomeStack.Group screenOptions={{ presentation: 'modal' }}>
        <HomeStack.Screen name="Account" component={AccountScreen} />
      </HomeStack.Group>
    </HomeStack.Navigator>
  );
}

export default HomeScreenStack;