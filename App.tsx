import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import CartScreenStack from './src/stacks/CartStack';
import HomeScreenStack from './src/stacks/HomeStack';
import ScanScreenStack from './src/stacks/ScanStack';
import Icon, { Ionicons } from "@react-native-vector-icons/ionicons";

const Tab = createBottomTabNavigator();

function RootStack() {
  return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused }) => {
            let iconName;

            if (route.name === 'HomeStack') {
              iconName = focused ? 'home-sharp' : 'home-outline';
            } else if (route.name === 'ScanStack') {
              iconName = focused ? 'scan-sharp' : 'scan-outline';
            } else if (route.name === 'CartStack') {
              iconName = focused ? 'cart-sharp' : 'cart-outline';
            }
            return <Ionicons name={iconName as any} color='#077cff' size={20} />
          },
          headerShown: false
        })}
      >
        <Tab.Screen name="HomeStack" component={HomeScreenStack} />
        <Tab.Screen name="ScanStack" component={ScanScreenStack} />
        <Tab.Screen name="CartStack" component={CartScreenStack} />
      </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  )
}

