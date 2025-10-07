import { memo } from 'react';
import { StyleSheet, View } from "react-native";
import Ionicons from "@react-native-vector-icons/ionicons";

const styles = StyleSheet.create({
  box: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  emptyStars: {
    flexDirection: 'row'
  },
  filledStars: {
    position: 'absolute',
    left: 0,
    overflow: 'hidden',
    flexDirection: 'row'
  }
});

interface RatingStarsProps {
  rating: number;
  color?: string;
  size?: number;
}

const RatingStars: React.FC<RatingStarsProps> = ({ rating, color, size }) => {
  const starColor = color ? color : '#00008B';
  const starSize = size ? size : 15;
  const totalWidth = starSize * 5;
  const starsWidth = (rating / 5) * totalWidth;

  return (
    <View style={styles.box}>
      <View style={[ styles.emptyStars, { width: totalWidth }]}>
        <Ionicons name='star-outline' color={starColor} size={starSize} />
        <Ionicons name='star-outline' color={starColor} size={starSize} />
        <Ionicons name='star-outline' color={starColor} size={starSize} />
        <Ionicons name='star-outline' color={starColor} size={starSize} />
        <Ionicons name='star-outline' color={starColor} size={starSize} />
      </View>
      <View style={[ styles.filledStars, { width: starsWidth }]}>
        <Ionicons name='star' color={starColor} size={starSize} />
        <Ionicons name='star' color={starColor} size={starSize} />
        <Ionicons name='star' color={starColor} size={starSize} />
        <Ionicons name='star' color={starColor} size={starSize} />
        <Ionicons name='star' color={starColor} size={starSize} />
      </View>
    </View>
  );
};

export default memo(RatingStars);