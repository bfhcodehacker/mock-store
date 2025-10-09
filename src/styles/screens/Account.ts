import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  profileBox: {
    margin: 20,
    padding: 20,
    borderRadius: 10,
    backgroundColor: '#fff'
  },
  profileTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  profileImage: {
    height: 100,
    width: 100
  },
  profileInfo: {
    width: '60%',
    justifyContent: 'space-around',
    height: 100
  },
  profileText: {
    textAlign: 'right',
    fontSize: 18,
    color: '#0000b8'
  },
  addressBox: {
    margin: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20
  },
  addressTitle: {
    color: '#00008b',
    fontSize: 20,
    marginBottom: 10
  },
  addressContainer: {
    borderWidth: 1,
    borderColor: '#00008b',
    borderRadius: 5,
    padding: 10
  },
  addressText: {
    color: '#0000b8',
    fontSize: 16
  },
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
    fontWeight: 'bold',
    paddingHorizontal: 20,
    paddingVertical: 10,
    textAlign: 'center'
  }
});