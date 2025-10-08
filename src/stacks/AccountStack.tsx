import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AccountScreen } from "../screens/Account";
import { SignInScreen } from "../screens/SignIn";

export type AccountStackParamList = {
  AccountScreen: undefined;
  SignIn: undefined;
};

const AccountStack = createNativeStackNavigator<AccountStackParamList>();

const AccountScreenStack = () => {
  return (
    <AccountStack.Navigator
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
      <AccountStack.Group>
        <AccountStack.Screen name="AccountScreen" component={AccountScreen} options={{title: 'Account'}} />
      </AccountStack.Group>
      <AccountStack.Group screenOptions={{ presentation: 'modal' }}>
        <AccountStack.Screen
          name="SignIn"
          component={SignInScreen}
          options={{ headerBackVisible: false, gestureEnabled: false }}/>
      </AccountStack.Group>
    </AccountStack.Navigator>
  );
}

export default AccountScreenStack;