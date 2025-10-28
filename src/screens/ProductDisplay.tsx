import { ActivityIndicator, Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { useMemo, useState } from 'react';
import { GradientWrapper } from '../components/GradientWrapper';
import { useGetProductQuery } from '../reducers/productData';
import { styles } from '../styles/screens/ProductDisplay';
import { ImageCarousel } from '../components/PDP/ImageCarousel';
import { PDPDetails } from '../components/PDP/PDPDetails';
import { formatPDPDetails } from '../lib/helpers';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { addToCart } from '../reducers/cartData';
import { ProductDetail } from '../types/product';
import { ATCModal } from '../components/ATCModal';
import ProductReviews from '../components/PDP/ProductReviews';

interface ProductDisplayProps {
  route?: RouteProp<{ params: { productId: string } }, 'params'>;
}

export const ProductDisplayScreen: React.FC<ProductDisplayProps> = ({ route }) => {
  const productId = route?.params?.productId || '';
  // fyi, I know I don't need to make this request as all product data is sent with categories
  // request. however, I wanted to add another rtk query request as other apis will be different
  const { data, isLoading } = useGetProductQuery(productId);
  const pdpDetails: ProductDetail[] = useMemo(() => formatPDPDetails(data), [data]);
  const dispatch = useAppDispatch();
  const theme = useAppSelector(state => state.theme);

  const [showAddedToCartModal, setShowAddedToCartModal] = useState(false);

  const addProductToCart = () => {
    if (data) {
      dispatch(addToCart({product: data, qty: 1}));
      setShowAddedToCartModal(true);
    }
  }

  const closeAddedToCartModal = () => {
    setShowAddedToCartModal(false);
  }

  return (
    <GradientWrapper>
     {isLoading ? (
        <View style={styles.loading}>
          <ActivityIndicator size={'large'} />
        </View>
      ) : (
        <ScrollView style={styles.container}>
          {data ? (
            <View style={styles.productBox} testID={'pdp-product-data'}>
              <View style={[styles.productContainer, { backgroundColor: theme.secondaryColor}]}>
                <View style={styles.carouselContainer}>
                  <ImageCarousel images={data.images} />
                </View>
              </View>
              <View style={[styles.productInfo, { backgroundColor: theme.secondaryColor}]}>
                <Text style={[styles.productTitle, theme.secondaryFont]}>{data.title}</Text>
                <Text style={styles.productPrice}>${data.price}</Text>
                <Text style={styles.productDescription}>{data.description}</Text>
                {data.reviews?.length && (
                  <ProductReviews reviews={data.reviews} />
                )}
                {pdpDetails.length && (
                  <View testID={'pdp-details'}>
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
              <Text
                style={styles.noProductsText}
                testID={'pdp-no-product'}
              >
                Sorry, we were unable to load product data
              </Text>
            </View>
          )}
 
        </ScrollView>
      )}
      {showAddedToCartModal && (
        <ATCModal product={data} onClose={closeAddedToCartModal} />
      )}
      {!isLoading && !!data && (
        <TouchableOpacity
          onPress={addProductToCart}
          style={[styles.addToCartBtn, { backgroundColor: theme.primaryColor}]}
          testID={'pdp-atc-btn'}  
        >
          <Text
            style={[styles.addToCartText, theme.primaryFont]}>Add To Cart</Text>
        </TouchableOpacity>
      )}
    </GradientWrapper>
  );
}