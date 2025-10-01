import { ActivityIndicator, ScrollView, Text, View } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { GradientWrapper } from '../components/GradientWrapper';
import { useGetProductQuery } from '../reducers/productData';
import { styles } from '../styles/ProductDisplay';
import { ImageCarousel } from '../components/PDP/ImageCarousel';
import { Product } from '../types/product';
import { PDPDetails } from '../components/PDP/PDPDetails';
import { formatPDPDetails } from '../lib/helpers';

interface ProductDisplayProps {
  route?: RouteProp<{ params: { productId: string } }, 'params'>;
}



export const ProductDisplayScreen: React.FC<ProductDisplayProps> = ({ route }) => {
  const productId = route?.params?.productId || '';
  // fyi, I know I don't need to make this request as all product data is sent with categories
  // request. however, I wanted to add another rtk query request as other apis will be different
  const { data, isLoading } = useGetProductQuery(productId);
  console.log('pdp', data, isLoading);
  const pdpDetails = formatPDPDetails(data);

  return (
    <GradientWrapper>
     {isLoading ? (
        <View style={styles.loading}>
          <ActivityIndicator size={'large'} />
        </View>
      ) : (
        <ScrollView style={styles.container}>
          {data ? (
            <View style={styles.productBox}>
              <View style={styles.productContainer}>
                <View style={styles.carouselContainer}>
                  <ImageCarousel images={data.images} />
                </View>
              </View>
              <View style={styles.productInfo}>
                <Text style={styles.productTitle}>{data.title}</Text>
                <Text style={styles.productPrice}>${data.price}</Text>
                <Text style={styles.productDescription}>{data.description}</Text>
                {pdpDetails.length && (
                  <View>
                    <Text style={styles.productDetailsTitle}>Product Details</Text>
                    {pdpDetails.map(detail => {
                      return <PDPDetails title={detail.title} text={detail.text} key={detail.title}/>
                    })}
                  </View>
                )}
              </View>
            </View>
          ) : (
            <View style={styles.loading}>
              <Text style={styles.noProductsText}>Sorry, we were unable to load product data</Text>
            </View>
          )}
        </ScrollView>
      )}
    </GradientWrapper>
  );
}