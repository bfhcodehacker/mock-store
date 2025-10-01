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
    marginBottom: 100
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
  },
  addToCartBtn: {
    position: 'absolute',
    width: '98%',
    height: 60,
    backgroundColor: '#00008B',
    margin: '1%',
    marginBottom: 5,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#00008B',
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center'
  },
  addToCartText: {
    color: '#fff',
    fontSize: 24,
    textAlign: 'center'
  },
  addedToCartModal: {
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
  addedToCartModalText: {
    fontSize: 24,
    textAlign: 'center',
    fontWeight: 'bold'
  },
  closeModalBtn: {
    width: '100%',
    backgroundColor: '#00008B',
    borderRadius: 5
  },
  closeModalBtnText: {
    color: '#fff',
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  modalBackdrop: {
    zIndex: 5,
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: '#000',
    opacity: 0.5
  }
});