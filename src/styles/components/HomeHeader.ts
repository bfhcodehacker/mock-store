import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  headerBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 30,
    paddingHorizontal: 22,
    paddingTop: 10
  },
  welcomeText: {
    fontSize: 24,
    color: '#fff'
  },
  customizeBtn: {
    paddingVertical: 10,
    paddingHorizontal: 5,
    borderRadius: 5,
    elevation: 5
  },
  customizeBtnText: {
    fontSize: 16
  }
});