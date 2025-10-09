import {
  ActivityIndicator,
  Alert,
  Image,
  PermissionsAndroid,
  ScrollView,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AccountStackParamList } from "../stacks/AccountStack";
import { getUserData } from "../reducers/accountData";
import { GradientWrapper } from "../components/GradientWrapper";
import { styles } from '../styles/screens/Account';
import { LeafletView } from 'react-native-leaflet-view';
import { Address } from "../types/account";
import Geolocation, { GeolocationResponse } from '@react-native-community/geolocation';

const defaultImage = require('../assets/images/defaultProfile.jpg');
const defaultLocation = {
  lat: 40.7484,
  lng: -73.9857
};
const defaultMarker = {
  position: defaultLocation,
  icon: '📍',
  size: [18, 18]
};

export const AccountScreen: React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<AccountStackParamList>>();
  const dispatch = useAppDispatch();
  const isLoggedIn = useAppSelector(state => state.account.isLoggedIn);
  const account = useAppSelector(state => state.account);
  const { signInData, userData } = account;
  const [position, setPosition] = useState(defaultLocation);
  const [marker, setMarker] = useState(defaultMarker);

  useEffect(() => {
    if (!isLoggedIn) {
      navigation.navigate('SignIn');
    } else if (!account.userData && account.userDataStatus === 'idle') {
      dispatch(getUserData());
    }
  }, [isLoggedIn]);

  if (!account.isLoggedIn || !signInData) {
    return (
      <GradientWrapper>
        <ActivityIndicator size='large' />
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
      <View style={styles.addressContainer} key={address.address}>
        <Text style={styles.addressText}>{address.address}</Text>
        <Text style={styles.addressText}>
          {address.city + ', ' + address.stateCode + ' ' + address.postalCode}
        </Text>
      </View>
    );
  }

  const getLocation = () => {
    Geolocation.getCurrentPosition(
      (position) => { setLocation(position) },
      errorGettingLocation
    );
  }

  const errorGettingLocation = (data?: any) => {
    Alert.alert('There was an error getting your location')
  }

  const setLocation = (data: GeolocationResponse) => {
    const coords = {
      lat: data.coords.latitude,
      lng: data.coords.longitude
    };
    setPosition(coords);
    const mark = {
      position: coords,
      icon: '📍',
      size: [18, 18]
    };
    setMarker(mark);
  }

  const requestLocation = async () => {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      {
        title: 'Location Permission',
        message: 'This App needs access to your location ' +
                  'so we can know where you are.',
        buttonPositive: 'Accept'
      }
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      getLocation();
    } else {
      errorGettingLocation();
    }
  }

  return (
    <GradientWrapper>
      <ScrollView>
        <View style={styles.profileBox}>
          <View style={styles.profileTop}>
            <Image source={profileImage} style={styles.profileImage} resizeMode='cover'/>
            <View style={styles.profileInfo}>
              <Text style={styles.profileText}>{signInData.firstName + ' ' + signInData.lastName}</Text>
              {email?.length && (
                <View>
                  <Text style={styles.profileText}>{email[0] + '@'}</Text>
                  <Text style={styles.profileText}>{email[1]}</Text>
                </View>
              )}
            </View>
          </View>
        </View>
        {addresses.length && (
          <View style={styles.addressBox}>
            <Text style={styles.addressTitle}>Addresses</Text>
            {addresses.map(address => renderAddress(address))}
          </View>
        )}
        <View style={styles.mapBox}>
          <Text style={styles.mapTitle}>Location</Text>
          <View style={styles.mapView}>
            <LeafletView
              mapCenterPosition={position}
              zoom={10}
              mapMarkers={[marker]}
            />
          </View>
        </View>
        <TouchableOpacity onPress={requestLocation} style={styles.locationBtn}>
          <Text style={styles.locationBtnText}>Use Current Location</Text>
        </TouchableOpacity>
      </ScrollView>
    </GradientWrapper>
  );
}           
