import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "../screens/HomeScreen";
import { CategoriesScreen } from "../screens/Categories";
import { ProductIndexScreen } from "../screens/ProductIndex";
import { ProductDisplayScreen } from "../screens/ProductDisplay";
import { Category } from "../types/category";
import { getHeaderTitle } from '@react-navigation/elements';
import { NavHeader } from "../components/NavHeader";

export type HomeStackParamList = {
  HomeScreen: undefined;
  Categories: undefined;
  ProductIndex: { category: Category };
  ProductDisplay: { productId?: number, name?: string };
};

const HomeStack = createNativeStackNavigator<HomeStackParamList>();

const HomeScreenStack = () => {
  return (
    <HomeStack.Navigator
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
    </HomeStack.Navigator>
  );
}

export default HomeScreenStack;