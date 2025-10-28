import { ActivityIndicator, ScrollView, Text, View } from 'react-native';
import { GradientWrapper } from '../components/GradientWrapper';
import { Category } from '../types/category';
import { useGetProductsFromCategoryQuery } from '../reducers/productData';
import { RouteProp } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';

import { ProductIndexProduct } from '../components/ProductIndexProduct';
import { styles } from '../styles/screens/ProductIndex';
import { Product } from '../types/product';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { HomeStackParamList } from '../stacks/HomeStack';
import { useAppSelector } from '../app/hooks';

interface ProductIndexProps {
  route?: RouteProp<{ params: { category: Category} }, 'params'>;
}

export const ProductIndexScreen: React.FC<ProductIndexProps> = ({ route }) => {
  const slug = route?.params?.category?.slug || '';
  const { data, isLoading } = useGetProductsFromCategoryQuery(slug);
  const navigation = useNavigation<NativeStackNavigationProp<HomeStackParamList>>();
  const theme = useAppSelector(state => state.theme);

  const onProductPress = (product: Product) => () => {
    navigation.navigate('ProductDisplay', { productId: product.id, name: product.title });
  }

  return (
    <GradientWrapper>
      {isLoading ? (
        <View style={styles.loading}>
          <ActivityIndicator size={'large'} />
        </View>
      ) : (
        <ScrollView style={styles.scrollview}>
          {data?.products?.length ? (
            data.products.map((product, index) => {
              return <ProductIndexProduct
                index={index}
                product={product}
                key={product.sku}
                onPress={onProductPress}
              />
            })
          ) : (
            <View style={styles.loading}>
              <Text
                style={[styles.noProductsText, theme.primaryFont]}
                testID={'product-index-error'}  
              >
                Sorry, we were unable to load product data
              </Text>
            </View>
          )}
        </ScrollView>
      )}
    </GradientWrapper>
  );
}