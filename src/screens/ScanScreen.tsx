import { ActivityIndicator, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { styles } from '../styles/Scan';
import { Camera, useCameraDevice, useCameraPermission, useCodeScanner } from 'react-native-vision-camera';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ScanStackParamList } from '../stacks/ScanStack';
import { useAppState } from '@react-native-community/hooks';
import { useState } from 'react';
import { useLazyGetProductQuery } from '../reducers/productData';
import { addToCart } from '../reducers/cartData';
import { useAppDispatch } from '../app/hooks';
import { Product } from '../types/product';
import { ATCModal } from '../components/ATCModal';
import { Modal } from '../components/Modal';

export const ScanScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<ScanStackParamList>>();
  const { hasPermission, requestPermission } = useCameraPermission();
  const isFocused = useIsFocused();
  const appState = useAppState();
  const dispatch = useAppDispatch();

  const [showProductModal, setShowProductModal] = useState(false);
  const [showATCModal, setShowATCModal] = useState(false);

  const isActive = isFocused && appState === "active";
  const device = useCameraDevice('back');

  const [trigger, result] = useLazyGetProductQuery();
  const { data, isError, isLoading, isFetching } = result;

  const continueShopping = () => {
    navigation.navigate('Home' as any);
  };

  const closeProductModal = () => {
    setShowProductModal(false);
  }

  const addProductToCart = (product: Product) => () => {
    dispatch(addToCart({product, qty: 1}));
    closeProductModal();
    setShowATCModal(true);
  }

  const closeATCModal = () => {
    setShowATCModal(false);
  }

  const codeScanner = useCodeScanner({
    codeTypes: ['qr', 'code-128'],
    onCodeScanned: (codes) => {
      // creating barcodes of the form "product-12" where 12 is the product id to consume
      const productId = codes?.[0]?.value?.replace('product-', '');
      if (productId?.length && !isFetching && !showProductModal) {
        setShowProductModal(true);
        trigger(productId);
      }
    }
  })

  const renderModalContent = () => {
    if (isLoading || isFetching) {
      return (
        <View style={styles.modalBox}>
          <View style={styles.activityArea}>
            <ActivityIndicator size='large' />
          </View>
          <TouchableOpacity onPress={closeProductModal} style={styles.closeProductModalBtn}>
            <Text style={styles.closeProductModalBtnText}>Close</Text>
          </TouchableOpacity>
        </View>
      );
    } else if (!data || isError) {
      return (
        <View style={[styles.modalBox, styles.errorBox]}>
          <Text style={[styles.productModalText, styles.errorText]}>Error Loading Product</Text>
          <TouchableOpacity onPress={closeProductModal} style={styles.closeProductModalBtn}>
            <Text style={styles.closeProductModalBtnText}>Close</Text>
          </TouchableOpacity>
        </View>
      );
    } else {
      return (
        <View style={styles.modalBox}>
          <Text style={styles.productModalText}>Scanned Item:</Text>
          <Text style={styles.productModalText}>{data?.title}</Text>
          {data?.thumbnail && (
            <Image source={{ uri: data.thumbnail }} style={styles.productImage} />
          )}
          <TouchableOpacity onPress={addProductToCart(data)} style={styles.atcProductModalBtn}>
            <Text style={styles.closeProductModalBtnText}>Add To Cart</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={closeProductModal} style={styles.closeProductModalBtn}>
            <Text style={styles.closeProductModalBtnText}>Close</Text>
          </TouchableOpacity>
        </View>
      );
    }
  }

  if (!hasPermission) {
    return (
      <View style={styles.main}>
        <View style={styles.cameraNotReady}>
          <Text style={[styles.errorMessage, styles.notReadyMargin]}>
            Please allow camera access to scan product barcodes
          </Text>
          <TouchableOpacity onPress={requestPermission} style={styles.scanBtn}>
            <Text style={styles.scanBtnText}>Allow Camera Access</Text>
          </TouchableOpacity>
        </View>
      </View>      
    );
  }

  if (!device) {
    return (
      <View style={styles.main}>
        <View style={styles.cameraNotReady}>
          <Text style={[styles.errorMessage, styles.notReadyMargin]}>
            There was an error accessing the camera
          </Text>
          <TouchableOpacity onPress={continueShopping} style={styles.scanBtn}>
            <Text style={styles.scanBtnText}>Continue Shopping</Text>
          </TouchableOpacity>
        </View>
      </View>      
    );
  }

  return (
    <View style={styles.main}>
      <Camera
        style={StyleSheet.absoluteFill}
        device={device}
        isActive={isActive}
        codeScanner={codeScanner}
      />
      {showProductModal && (
        <Modal content={renderModalContent()} />
      )}
      {showATCModal && (
        <ATCModal product={data} onClose={closeATCModal} />
      )}
    </View>
  );
}