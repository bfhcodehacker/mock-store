import { Product, ProductDetail } from "../types/product";

export const formatPDPDetails = (product?: Product) => {
  const productData: ProductDetail[] = [];
  if (!product) {
    return [];
  }

  Object.keys(product).forEach(key => {
    switch(key) {
      case 'brand':
        if (product.brand) {
          productData.push({
            title: 'Brand',
            text: product.brand
          });
        }
        break;
      case 'dimensions':
        const width = product.dimensions?.width;
        const height = product.dimensions?.height;
        const depth = product.dimensions?.depth;
        let dimensionString = '';
        if (!!width) {
          dimensionString += `Width: ${width} `;
        }
        if (!!height) {
          dimensionString += `Height: ${height} `;
        }
        if (!!depth) {
          dimensionString += `Depth: ${depth}`;
        }
        if (!!dimensionString) {
          productData.push({
            title: 'Dimensions',
            text: dimensionString
          });
        }
        break; 
      case 'returnPolicy':
        if (product.returnPolicy) {
          productData.push({
            title: 'Return Policy',
            text: product.returnPolicy
          });
        }
        break;
      case 'shippingInformation':
        if (product.shippingInformation) {
          productData.push({
            title: 'Shipping Information',
            text: product.shippingInformation
          });
        }
        break;
      case 'warrantyInformation':
        if (product.warrantyInformation) {
          productData.push({
            title: 'Warranty Information',
            text: product.warrantyInformation
          })
        }
        break;
    }
  });
  return productData;
}