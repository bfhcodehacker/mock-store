import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  header: {
    fontSize: 20,
    textAlign: 'center',
    width: '100%',
    marginTop: 50,
    color: '#fff'
  },
  inputContainer: {
    backgroundColor: '#fff',
    margin: 20,
    marginTop: 50,
    padding: 20,
    borderRadius: 10,
    elevation: 5
  },
  textInput: {
    borderWidth: 2,
    borderColor: '#d3d3d3',
    borderRadius: 3,
    padding: 5,
    marginBottom: 10
  },
  errorText: {
    color: 'red',
    marginBottom: 10
  },
  statusBox: {
    height: 60,
    alignItems: 'center',
    justifyContent: 'center'
  },
  signInError: {
    color: 'red',
    fontSize: 20,
    fontStyle: 'italic',
    textAlign: 'center'
  },
  submitBtn: {
  },
  submitBtnText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 20,
    padding: 10,
    borderRadius: 10,
    elevation: 5,
    backgroundColor: '#00008b'
  },
  checkboxContainer: {
    margin: 5,
    flexDirection: 'row'
  },
  rememberMeText: {
    marginLeft: 5,
    fontSize: 16
  }
});