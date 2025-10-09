import Ionicons from "@react-native-vector-icons/ionicons";
import { StyleSheet, TouchableOpacity } from "react-native";

const styles = StyleSheet.create({
  box: {
    height: 20,
    width: 20,
    borderWidth: 1
  }
})

interface CheckboxProps {
  isChecked: boolean;
  toggleChecked: () => void;
}

export const Checkbox: React.FC<CheckboxProps> = ({ isChecked, toggleChecked}) => {
  return (
    <TouchableOpacity onPress={toggleChecked} style={styles.box}>
      {isChecked && (<Ionicons name='checkmark' size={20} />)}
    </TouchableOpacity>
  );
} 