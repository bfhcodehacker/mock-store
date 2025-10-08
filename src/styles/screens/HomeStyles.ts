import { StyleSheet } from "react-native";
import { cursiveFont } from "../../constants/fonts";

export const HomeStyles = StyleSheet.create({
  titleImageBox: {
    marginTop: 10,
    width: '90%',
    height: 200,
    marginHorizontal: '5%',
    borderRadius: 20,
    overflow: 'hidden',
    borderWidth: 2,
    borderColor: 'black',
    elevation: 3
  },
  titleImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover'
  },
  titleText: {
    width: '100%',
    textAlign: 'center',
    fontFamily: cursiveFont,
    fontSize: 60,
    paddingTop: '10%',
    position: 'absolute'
  }
});