import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  modalBackdrop: {
    zIndex: 5,
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    width: '90%',
    height: '90%',
    marginVertical: '5%',
    marginHorizontal: '5%',
    padding: 20,
    borderRadius: 20,
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: '#fff'
  },
  modalTop: {

  },
  previewBox: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  previewText: {
    fontSize: 20
  },
  previewHeader: {
    fontSize: 20
  },
  fontList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center'
  },
  fontListHeader: {
    fontSize: 20
  },
  font: {
    fontSize: 24,
    padding: 3,
    marginHorizontal: 5
  },
  pickerBox: {
    height: 400,
    marginBottom: 20
  },
  bold: {
    fontWeight: 'bold'
  },
  editFont: {
    borderWidth: 2,
    padding: 1,
    fontSize: 20
  },
  editColor: {
    height: 20,
    width: 40,
    borderWidth: 2,
    marginLeft: 20
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
  bottom: {
    marginBottom: 50
  }
});