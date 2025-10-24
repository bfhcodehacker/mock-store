import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: '100%'
  },
  title: {
    fontSize: 20,
    color: 'white',
    marginBottom: 5
  },
  productContainer: {
    paddingTop: 10
  },
  productBox: {
    marginRight: 20,
    borderWidth: 1,
    borderColor: '#fff',
    alignItems: 'center',
    borderRadius: 5,
    justifyContent: 'space-between',
    paddingHorizontal: 5
  },
  navLink: {
    alignItems: 'center'
  },
  image: {
    height: 80,
    width: 80,
    margin: 10,
    backgroundColor: '#fff'
  },
  productTitle: {
    width: 120,
    color: '#fff',
    fontSize: 16,
    textAlign: 'center'
  },
  addToCartBtn: {
    marginTop: 10,
    backgroundColor: '#00008b',
    borderRadius: 5,
    marginBottom: 10
  },
  addToCartText: {
    color: '#fff',
    textAlign: 'center',
    margin: 5
  }
})