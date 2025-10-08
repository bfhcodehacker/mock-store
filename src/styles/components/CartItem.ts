import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginVertical: 10,
    backgroundColor: '#00008B',
    borderRadius: 5,
    padding: 10,
    elevation: 5
  },
  topContainer: {
    flexDirection: 'row'
  },
  image: {
    height: 80,
    width: 80,
    backgroundColor: '#fff'
  },
  itemInfo: {
    marginLeft: 10,
    justifyContent: 'space-between',
    flex: 1
  },
  titleText: {
    fontSize: 18,
    color: '#fff',
    width: '85%'
  },
  itemPriceQty: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  priceText: {
    fontSize: 16,
    color: '#fff'
  },
  qtyEditBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30,
    marginBottom: 10
  },
  qtyTotalBox: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  itemTotalPrice: {
    fontSize: 16,
    color: '#fff',
    width: 130
  },
  stepperBox: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  stepperIcon: {

  },
  stepperQty: {
    paddingHorizontal: 5,
    color: '#fff',
    borderRadius: 2,
    borderWidth: 1,
    borderColor: '#fff',
    marginHorizontal: 5
  },
  removeItem: {

  },
  removeItemText: {

  }
})