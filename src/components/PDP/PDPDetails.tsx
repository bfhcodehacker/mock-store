import { Text, TouchableOpacity, View } from 'react-native';
import { useState } from 'react';
import { styles } from '../../styles/components/PDPDetails';
import Ionicons from '@react-native-vector-icons/ionicons';

interface PDPDetailsProps {
  title: string;
  text: string;
}

export const PDPDetails: React.FC<PDPDetailsProps> = ({ title, text }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleIsOpen = () => {
    setIsOpen(!isOpen);
  }

  return (
    <TouchableOpacity onPress={toggleIsOpen} style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>{title}</Text>
        <Ionicons name={isOpen ? 'chevron-up' : 'chevron-down'} size={20} />
      </View>
      {isOpen && (
        <Text style={styles.descriptionText}>{text}</Text>
      )}
    </TouchableOpacity>
  );
}