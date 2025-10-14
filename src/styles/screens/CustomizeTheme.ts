import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
  height: '100%',
  width: '100%'
  },
  title: {
    marginTop: 30,
    fontSize: 24,
    marginBottom: 10,
    marginLeft: 20
  },
  topContainer: {
    marginBottom: 30,
    marginHorizontal: 20
  },
  editRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
    alignItems: 'center'
  },
  editBox: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  editTitle: {
    fontSize: 20,
    marginRight: 20,
    textTransform: 'capitalize'
  },
  editColor: {
    height: 20,
    width: 40,
    borderWidth: 2
  },
  editFont: {
    borderWidth: 2,
    padding: 1,
    fontSize: 20
  },
  editBtn: {
    paddingVertical: 3,
    paddingHorizontal: 10,
    backgroundColor: '#d3d3d3',
    elevation: 5,
    borderWidth: 1,
    borderRadius: 5
  },
  previewContainer: {
    height: 350,
    marginHorizontal: 20
  },
  saveThemeBtn: {
    marginTop: 30,
    paddingHorizontal: 30,
    paddingVertical: 10,
    marginHorizontal: 20,
    borderWidth: 1,
    borderColor: '#00008B',
    borderRadius: 10
  },
  saveThemeBtnText: {
    fontSize: 20,
    color: '#00008B',
    textAlign: 'center'
  },
  savedThemesBox: {
    borderWidth: 1,
    marginHorizontal: 20,
    padding: 5
  },
  savedThemesHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  savedThemesTitle: {
    fontSize: 20
  },
  savedThemeBox: {
    paddingHorizontal: 10
  },
  savedThemeRow: {
    paddingVertical: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  savedThemeLeft: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  savedThemeText: {
    fontSize: 16,
    marginRight: 5
  },
  savedThemeColor: {
    height: 16,
    width: 30,
    borderWidth: 2
  }
});