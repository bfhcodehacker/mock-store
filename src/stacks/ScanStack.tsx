import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ScanScreen } from "../screens/ScanScreen";

const ScanStack = createNativeStackNavigator();

const ScanScreenStack = () => {
  return (
    <ScanStack.Navigator>
      <ScanStack.Screen name="Scan" component={ScanScreen} />
    </ScanStack.Navigator>
  );
}

export default ScanScreenStack;