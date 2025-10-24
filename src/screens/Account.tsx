import {
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AccountStackParamList } from "../stacks/AccountStack";
import { getUserData } from "../reducers/accountData";
import { GradientWrapper } from "../components/GradientWrapper";
import { styles } from '../styles/screens/Account';
import { Address } from "../types/account";
import { Location } from "../components/Location";
import { signUserOut } from "../lib/authHelpers";

const defaultImage = require('../assets/images/defaultProfile.jpg');

export const AccountScreen: React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<AccountStackParamList>>();
  const dispatch = useAppDispatch();
  const theme = useAppSelector(state => state.theme);
  const isLoggedIn = useAppSelector(state => state.account.isLoggedIn);
  const account = useAppSelector(state => state.account);
  const { signInData, userData } = account;

  const goToSignIn = () => {
    navigation.navigate('SignIn');
  }

  useEffect(() => {
    if (!isLoggedIn) {
      goToSignIn();
    } else if (!account.userData && account.userDataStatus === 'idle') {
      dispatch(getUserData());
    }
  }, [isLoggedIn]);

  if (!account.isLoggedIn || !signInData) {
    return (
      <GradientWrapper>
        <TouchableOpacity
          onPress={goToSignIn}
          style={[styles.signInBtn, { backgroundColor: theme.secondaryColor}]}
        >
          <Text style={[styles.signInText, theme.primaryFont]}>Sign In</Text>
        </TouchableOpacity>
      </GradientWrapper>
    );
  }

  const profileImage = signInData.image ? { uri: signInData.image } : defaultImage;
  const email = signInData.email?.split('@');
  const addresses = [userData?.address];

  const renderAddress = (address?: Address) => {
    if (!address) {
      return;
    }

    return (
      <View
        style={[
          styles.addressContainer,
          { backgroundColor: theme.secondaryColor, borderColor: theme.primaryColor }
        ]}
        key={address.address}
      >
        <Text style={[styles.addressText, theme.secondaryFont]}>{address.address}</Text>
        <Text style={[styles.addressText, theme.secondaryFont]}>
          {address.city + ', ' + address.stateCode + ' ' + address.postalCode}
        </Text>
      </View>
    );
  }

  const signOut = () => {
    signUserOut(dispatch);
  }

  return (
    <GradientWrapper>
      <ScrollView style={styles.scrollview}>
        <View style={[styles.profileBox, { backgroundColor: theme.secondaryColor} ]}>
          <View style={styles.profileTop}>
            <Image source={profileImage} style={styles.profileImage} resizeMode='cover'/>
            <View style={styles.profileInfo}>
              <Text style={[styles.profileText, theme.secondaryFont]}>
                {signInData.firstName + ' ' + signInData.lastName}
              </Text>
              {email?.length && (
                <View>
                  <Text style={[styles.profileText, theme.secondaryFont]}>{email[0] + '@'}</Text>
                  <Text style={[styles.profileText, theme.secondaryFont]}>{email[1]}</Text>
                </View>
              )}
            </View>
          </View>
        </View>
        {addresses.length && (
          <View style={[styles.addressBox, { backgroundColor: theme.secondaryColor }]}>
            <Text style={[styles.addressTitle, theme.secondaryFont]}>Addresses</Text>
            {addresses.map(address => renderAddress(address))}
          </View>
        )}
        <Location />
        <TouchableOpacity
          onPress={signOut}
          style={[styles.signOutBtn, { backgroundColor: theme.secondaryColor}]}
        >
          <Text style={[styles.signOutText, theme.secondaryFont]}>Sign Out</Text>
        </TouchableOpacity>
      </ScrollView>
    </GradientWrapper>
  );
}           
