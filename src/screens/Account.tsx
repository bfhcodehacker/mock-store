import { ActivityIndicator, Text, View } from "react-native";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AccountStackParamList } from "../stacks/AccountStack";
import { getUserData } from "../reducers/accountData";

export const AccountScreen: React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<AccountStackParamList>>();
  const dispatch = useAppDispatch();
  const isLoggedIn = useAppSelector(state => state.account.isLoggedIn);
  const account = useAppSelector(state => state.account);

  useEffect(() => {
    if (!account.isLoggedIn) {
      navigation.navigate('SignIn');
    } else if (!account.userData && account.userDataStatus === 'idle') {
      dispatch(getUserData());
    }
  }, [isLoggedIn]);

  console.log('account screen', account);

  if (!account.isLoggedIn) {
    return (
      <View>
        <ActivityIndicator size='large' />
      </View>
    );
  }

  return (
    <View>
      <Text>Hello!</Text>
    </View>
  );
}