import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ScanScreen } from "../screens/ScanScreen";

export type ScanStackParamList = {
  ScanScreen: undefined;
};

const ScanStack = createNativeStackNavigator<ScanStackParamList>();

const ScanScreenStack = () => {
  return (
    <ScanStack.Navigator
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
      <ScanStack.Screen name="ScanScreen" component={ScanScreen} options={{ title: 'Scan' }}/>
    </ScanStack.Navigator>
  );
}

export default ScanScreenStack;