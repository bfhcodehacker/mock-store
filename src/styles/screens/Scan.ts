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
  modalBox: {
    alignItems: 'center',
    height: 330
  },
  activityArea: {
    height: 200,
    justifyContent: 'center'
  },
  errorBox: {
    justifyContent: 'space-around'
  },
  errorText: {
    marginVertical: 40
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
  productImage: {
    height: 100,
    width: 100,
    marginTop: 10,
    marginBottom: 10
  },
  atcProductModalBtn: {
    width: 150,
    backgroundColor: '#00008B',
    borderRadius: 5,
    marginBottom: 20
  },
  closeProductModalBtn: {
    width: 150,
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