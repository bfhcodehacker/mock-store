import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ScanScreen } from "../screens/ScanScreen";
import { getHeaderTitle } from '@react-navigation/elements';
import { NavHeader } from "../components/NavHeader";

export type ScanStackParamList = {
  ScanScreen: undefined;
};

const ScanStack = createNativeStackNavigator<ScanStackParamList>();

const ScanScreenStack = () => {
  return (
    <ScanStack.Navigator
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
      <ScanStack.Screen name="ScanScreen" component={ScanScreen} options={{ title: 'Scan' }}/>
    </ScanStack.Navigator>
  );
}

export default ScanScreenStack;