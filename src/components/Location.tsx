import {
  Alert,
  PermissionsAndroid,
  StyleSheet,
  TouchableOpacity,
  Text,
  View
} from "react-native";
import { useState } from 'react';
import { LeafletView } from 'react-native-leaflet-view';
import Geolocation, { GeolocationResponse } from '@react-native-community/geolocation';
import { useAppSelector } from "../app/hooks";

const styles = StyleSheet.create({
  mapBox: {
    margin: 20,
    alignItems: 'center'
  },
  mapTitle: {
    fontSize: 20,
    color: '#fff',
    textAlign: 'left',
    width: '100%'
  },
  mapView: {
    margin: 20,
    width: '100%',
    height: 300
  },
  locationBtn: {
    marginHorizontal: 20,
    marginBottom: 50,
    borderRadius: 5,
    backgroundColor: '#fff'
  },
  locationBtnText: {
    color: '#00008b',
    fontSize: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
    textAlign: 'center'
  }
});

const defaultLocation = {
  lat: 40.7484,
  lng: -73.9857
};
const defaultMarker = {
  position: defaultLocation,
  icon: '📍',
  size: [18, 18]
};

export const Location: React.FC = () => {
  const theme = useAppSelector(state => state.theme);
  const [position, setPosition] = useState(defaultLocation);
  const [marker, setMarker] = useState(defaultMarker);

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
    <View>
      <View style={styles.mapBox}>
        <Text style={[styles.mapTitle, theme.primaryFont]}>Location</Text>
        <View style={styles.mapView}>
          <LeafletView
            mapCenterPosition={position}
            zoom={10}
            mapMarkers={[marker]}
          />
        </View>
      </View>
      <TouchableOpacity
        onPress={requestLocation}
        style={[styles.locationBtn, { backgroundColor: theme.secondaryColor}]}
      >
        <Text style={[styles.locationBtnText, theme.secondaryFont]}>
          Use Current Location
        </Text>
      </TouchableOpacity>
    </View>
  )
}