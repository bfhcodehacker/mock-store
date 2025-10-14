import { Text, View } from 'react-native';
import { ThemeText } from '../../reducers/themeData';
import { GradientWrapper } from '../GradientWrapper';
import { styles } from '../../styles/components/ThemePreview';

interface ThemePreviewProps {
  primaryColor: string;
  primaryFont: ThemeText;
  primaryColorEnd: string;
  secondaryColor: string;
  secondaryFont: ThemeText;
}

export const ThemePreview: React.FC<ThemePreviewProps> = ({
  primaryColor, primaryFont, primaryColorEnd, secondaryColor, secondaryFont
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Preview:</Text>
      <Text style={styles.infoText}>
        <Text style={styles.bold}>PrimaryColor</Text> is top of gradient
      </Text>
      <GradientWrapper
        fromColor={primaryColor}
        toColor={primaryColorEnd}
        containerStyle={styles.gradientStyle}
      >
        <Text style={[styles.text, primaryFont]}>This is PrimaryFont</Text>
        <View style={[styles.secondaryBox, {backgroundColor: secondaryColor}]}>
          <Text style={styles.infoText}>
            <Text style={styles.bold}>SecondaryColor</Text> is this background color
          </Text>
          <Text style={[styles.text, secondaryFont]}>This is SecondaryFont</Text>
        </View>
      </GradientWrapper>
      <Text style={styles.infoText}>
        <Text style={styles.bold}>PrimaryEndColor</Text> is bottom of gradient
      </Text>
    </View>
  );
}