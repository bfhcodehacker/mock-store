import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  loading: {
    width: '100%',
    height: '100%',
    justifyContent: 'center'
  },
  noProductsText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center'
  },
  container: {
    height: '100%',
    width: '100%',
  },
  productBox: {
    marginBottom: 150
  },
  productContainer: {
    marginTop: 30,
    marginBottom: 10,
    marginHorizontal: '10%',
    width: '80%',
    backgroundColor: '#fff',
    borderRadius: 5
  },
  carouselContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    margin: 20,
    borderWidth: 2,
    borderRadius: 5
  },
  productInfo: {
    marginHorizontal: '5%',
    width: '90%',
    borderRadius: 5,
    backgroundColor: '#fff',
    padding: 10
  },
  infoRow: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  productTitle: {
    color: '#00008B',
    fontSize: 18,
    fontWeight: 'bold'
  },
  productPrice: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  productDescription: {
    marginTop: 10,
    fontSize: 16
  },
  productDetailsTitle: {
    fontSize: 18,
    marginTop: 20,
    marginBottom: 10
  }
});