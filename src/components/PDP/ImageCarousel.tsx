import { Image, Text, View } from "react-native";
import Carousel from "react-native-reanimated-carousel";
import { styles } from "../../styles/ImageCarousel";
 
interface ImageCarouselProps {
  images?: string[];
}

export const ImageCarousel: React.FC<ImageCarouselProps> = ({images}) => {
  const renderItem = (item: any) => {
    return (
      <View>
        <Image source={{ uri: item.item }} resizeMode='contain' style={styles.image} />
      </View>
    );
  }

  if (!images?.length) {
    return (
      <View style={[styles.carousel, styles.noImages]}>
        <Text style={styles.noImagesText}>Image not available</Text>
      </View>
    );
  }

	return (
		<View id="carousel-component">
			<Carousel
				testID={"image-carousel"}
				loop={false}
				width={250}
				height={250}
				snapEnabled={true}
				pagingEnabled={false}
				data={images}
				style={styles.carousel}
				renderItem={renderItem}
			/>
		</View>
	);
}
