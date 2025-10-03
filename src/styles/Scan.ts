import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  main: {
    height: '100%',
    width: '100%',
    backgroundColor: '#00008B'
  },
  cameraNotReady: {
    flex: 1,
    alignItems: 'center'
  },
  notReadyMargin: {
    marginTop: '30%'
  },
  errorMessage: {
    color: '#fff',
    fontSize: 24,
    textAlign: 'center',
    padding: 20
  },
  scanBtn: {
    marginTop: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderWidth: 2,
    borderColor: '#fff',
    borderRadius: 10
  },
  scanBtnText: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center'
  },
  productModal: {
    zIndex: 6,
    position: 'absolute',
    marginTop: '30%',
    marginHorizontal: '20%',
    width: '60%',
    height: 200,
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 20,
    justifyContent: 'space-around'
  },
  productModalText: {
   fontSize: 24,
    textAlign: 'center',
    fontWeight: 'bold'
  },
  closeProductModalBtn: {
   width: '100%',
    backgroundColor: '#00008B',
    borderRadius: 5
  },
  closeProductModalBtnText: {
    color: '#fff',
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  }
});