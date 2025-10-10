import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useAppSelector } from "../app/hooks"
import Ionicons from "@react-native-vector-icons/ionicons";

interface NavHeaderProps {
  title: string;
  goBack?: () => void;
}

const styles = StyleSheet.create({
  header: {
    height: 80,
    alignItems: 'center',
    paddingTop: 35,
    paddingHorizontal: 20,
    elevation: 5,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  title: {
    textAlign: 'center',
    fontSize: 24,
    color: 'black'
  },
  leftBtn: {
    marginBottom: 4
  },
  rightPlaceholder: {
    width: 28
  }
});

export const NavHeader: React.FC<NavHeaderProps> = ({ title, goBack }) => {
  const theme = useAppSelector(state => state.theme);
  return (
    <View style={[styles.header, { backgroundColor: theme.primaryColor}]}>
      <TouchableOpacity onPress={goBack} style={styles.leftBtn}>
        <Ionicons name='chevron-back-sharp' size={28} color={theme.secondaryColor} />
      </TouchableOpacity>
      <Text style={[styles.title, theme.secondaryFont]}>{title}</Text>
      <View style={styles.rightPlaceholder} />
    </View>
  );
}