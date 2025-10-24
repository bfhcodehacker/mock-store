import { StyleSheet } from "react-native";
import { FeaturedProducts } from "../../components/FeaturedProducts";

export const styles = StyleSheet.create({
  main: {
   flex: 1,
    backgroundColor: '#d3d3d3'
  },
  innerContainer: {
    flex: 1,
    margin: 20,
    justifyContent: 'space-between'
  },
  cartHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  cartCount: {
    fontSize: 18,
    color: '#00008B'
  },
  cartHeaderTotal: {
    fontSize: 18,
    color: '#00008B'
  },
  emptyCart: {
    marginTop: 100,
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
  },
  featuredProductsBox: {
    marginVertical: 20
  }
});