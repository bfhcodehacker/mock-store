import { View, StyleSheet } from 'react-native';

interface ModalProps {
  content: React.ReactNode;
}

const styles = StyleSheet.create({
  modalBackdrop: {
    zIndex: 5,
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
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
});

export const Modal: React.FC<ModalProps> = ({ content }) => {
  return (
    <View style={styles.modalBackdrop}>
      <View style={styles.modalContent}>
        {content}
      </View>
    </View>
  );
}