import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  productBox: {
    flexDirection: 'row',
    marginHorizontal: '5%',
    width: '90%',
    marginTop: 10,
    backgroundColor: '#fff',
    borderRadius: 10
  },
  thumbnail: {
    height: 80,
    width: 80,
    margin: 5
  },
  productTextBox: {
    margin: 5,
    justifyContent: 'space-around'
  },
  productTitleBox: {
    flexDirection: 'row'
  },
  productTitle: {
    color: '#00008B',
    fontSize: 18,
    fontWeight: 'bold',
    width: '85%'
  },
  productInfoBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '85%'
  },
  productPrice: {
    color: '#00008B',
    fontSize: 14
  },
  productRatingBox: {
    flexDirection: 'row'
  },
  productRating: {
    color: '#00008B',
    fontSize: 14
  },
  loading: {
    marginTop: 200,
    width: '100%',
    height: '100%',
    justifyContent: 'center'
  },
  noProductsText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center'
  },
  scrollview: {
    marginBottom: 10
  }
});