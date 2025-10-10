import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AccountScreen } from "../screens/Account";
import { SignInScreen } from "../screens/SignIn";
import { getHeaderTitle } from '@react-navigation/elements';
import { NavHeader } from "../components/NavHeader";

export type AccountStackParamList = {
  AccountScreen: undefined;
  SignIn: undefined;
};

const AccountStack = createNativeStackNavigator<AccountStackParamList>();

const AccountScreenStack = () => {
  return (
    <AccountStack.Navigator
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
      <AccountStack.Group>
        <AccountStack.Screen
          name="AccountScreen"
          component={AccountScreen}
          options={{title: 'Account'}}
        />
      </AccountStack.Group>
      <AccountStack.Group screenOptions={{ presentation: 'modal' }}>
        <AccountStack.Screen
          name="SignIn"
          component={SignInScreen}
          options={{ headerBackVisible: false, gestureEnabled: false, title: "Sign In" }}/>
      </AccountStack.Group>
    </AccountStack.Navigator>
  );
}

export default AccountScreenStack;