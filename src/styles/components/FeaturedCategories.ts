import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  outerContainer: {
    marginTop: 30,
    marginHorizontal: '5%',
    width: '90%',
    marginBottom: 20
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10
  },
  titleText: {
    fontSize: 20,
    color: 'white'
  },
  container: {
    borderWidth: 2,
    borderColor: '#fff',
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    padding: '5%',
    paddingBottom: '3%',
    width: '100%'
  },
  box: {
    width: '40%',
    padding: 10,
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 5,
    marginBottom: 10
  },
  icon: {
    height: 20,
    width: 20
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    color: '#00008B'
  },
  shopAllLink: {

  },
  shopAllText: {
    fontSize: 20,
    color: 'white',
    textDecorationLine: 'underline',
    alignSelf: 'flex-end'
  }
});