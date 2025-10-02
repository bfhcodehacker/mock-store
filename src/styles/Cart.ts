import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  main: {
    height: '100%',
    width: '100%',
    backgroundColor: '#d3d3d3'
  },
  innerContainer: {
    width: '90%',
    margin: '5%'
  },
  cartHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  cartCount: {
    fontSize: 18,
    color: '#00008B',
    fontWeight: 'bold'
  },
  cartHeaderTotal: {
    fontSize: 18,
    color: '#00008B',
    fontWeight: 'bold'
  },
  emptyCart: {
    marginTop: 200,
    alignItems: 'center'
  },
  emptyCartText: {
    fontSize: 24,
    textAlign: 'center',
    fontWeight: 'bold'
  },
  continueShoppingBtn: {
    padding: 10,
    backgroundColor: '#00008B',
    borderRadius: 5,
    width: 250,
    marginTop: 30,
  },
  continueShoppingText: {
    fontSize: 20,
    color: '#fff',
    textAlign: 'center'
  }
});