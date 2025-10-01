import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import CartScreenStack from './src/stacks/CartStack';
import HomeScreenStack from './src/stacks/HomeStack';
import ScanScreenStack from './src/stacks/ScanStack';
import { Ionicons, IoniconsIconName } from "@react-native-vector-icons/ionicons";

import { store } from './src/app/store';
import { Provider } from 'react-redux';

const Tab = createBottomTabNavigator();

function RootStack() {
  return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'home-sharp' : 'home-outline';
            } else if (route.name === 'Scan') {
              iconName = focused ? 'scan-sharp' : 'scan-outline';
            } else if (route.name === 'Cart') {
              iconName = focused ? 'cart-sharp' : 'cart-outline';
            }
            return <Ionicons name={iconName as IoniconsIconName} color='#077cff' size={20} />
          },
          headerShown: false
        })}
      >
        <Tab.Screen name="Home" component={HomeScreenStack} />
        <Tab.Screen name="Scan" component={ScanScreenStack} />
        <Tab.Screen name="Cart"
          component={CartScreenStack}
          options={{ tabBarBadgeStyle: { color: '#fff', backgroundColor: '#00008B'}}}
        />
      </Tab.Navigator>
  );
}

export default function App() {

  return (
    <Provider store={store}>
      <NavigationContainer>
        <RootStack />
      </NavigationContainer>
    </Provider>
  )
}

