import { Product } from "../product";

export interface AddProductToCart {
  product: Product;
  qty: number;
}

export interface RemoveProductFromCart {
  productId: number;
}

export interface IncrementCartItemQty {
  productId: number;
}

export interface DecrementCartItemQty {
  productId: number;
}