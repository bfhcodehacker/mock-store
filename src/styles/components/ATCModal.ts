import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    addedToCartModal: {
    zIndex: 6,
    position: 'absolute',
    marginTop: '30%',
    marginHorizontal: '20%',
    width: '60%',
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 20,
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  modalImage: {
    height: 100,
    width: 100,
    marginTop: 20,
    marginBottom: 10
  },
  modalItemTitle: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 10,
    fontWeight: 'bold'
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
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  }
});