import { FC, memo, useState } from 'react';
import { TouchableOpacity, Text, View } from "react-native";
import { Review } from "../../types/product";
import Ionicons from "@react-native-vector-icons/ionicons";
import RatingStars from '../RatingStars';
import { styles } from '../../styles/Reviews';

interface ProductReviewProps {
  reviews: Review[];
}

const ProductReviews: FC<ProductReviewProps> = ({ reviews }) => {
  const [ showReviews, setShowReviews ] = useState(false);

  const toggleShowReviews = () => {
    setShowReviews(!showReviews);
  }

  return (
    <View style={styles.reviewContainer}>
      <TouchableOpacity style={styles.reviewHeader} onPress={toggleShowReviews}>
        <Text style={styles.reviewHeaderText}>Reviews</Text>
        <Ionicons name={showReviews ? 'chevron-up' : 'chevron-down'} size={20} />
      </TouchableOpacity>
      {showReviews && (
        <View style={styles.reviewBox}>
          {reviews.map(review => {
            return (
              <View style={styles.reviewData}>
                <View style={styles.infoBox}>
                  <View style={styles.infoLeft}>
                    <Text style={styles.name}>{review.reviewerName}</Text>
                    {review.date && (
                      <Text style={styles.date}>
                        {new Date(review.date).toLocaleDateString()}
                      </Text>
                    )}
                  </View>
                  {review.rating && (
                    <View style={styles.infoRight}>
                      <RatingStars rating={review.rating} />
                    </View>
                  )}
                </View>
                <Text style={styles.reviewText}>{review.comment}</Text>
              </View>
            )
          })}
        </View>
      )}
    </View>
  );
}

export default memo(ProductReviews);