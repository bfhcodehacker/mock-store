import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  outerContainer: {
    marginTop: 30,
    marginHorizontal: '5%',
    width: '90%'
  },
  titleText: {
    fontSize: 20,
    color: 'white',
    marginBottom: 15
  },
  container: {
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    padding: '5%',
    paddingBottom: '3%',
    width: '100%',
    borderRadius: 20,
    elevation: 5
  },
  box: {
    width: '40%',
    padding: 10,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#00008B',
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
    paddingVertical: 15
  },
  shopAllText: {
    fontSize: 20,
    color: 'white',
    textDecorationLine: 'underline',
    alignSelf: 'flex-end'
  }
});