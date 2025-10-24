import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  signInBtn: {
    marginTop: '30%',
    alignSelf: 'center',
    backgroundColor: '#fff',
    borderRadius: 10
  },
  signInText: {
    color: '#00008b',
    fontSize: 20,
    paddingVertical: 10,
    paddingHorizontal: 30
  },
  scrollview: {
    width: '100%',
    height: '100%',
    marginBottom: 100
  },
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
  signOutBtn: {
    marginTop: 10,
    marginHorizontal: 20,
    marginBottom: 50,
    borderRadius: 5,
    backgroundColor: '#fff'
  },
  signOutText: {
    color: '#00008b',
    fontSize: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
    textAlign: 'center'
  }
});