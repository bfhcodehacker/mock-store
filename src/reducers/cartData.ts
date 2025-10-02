import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartProduct } from "../types/cartTypes/cartTypes";

import {
  AddProductToCart,
  DecrementCartItemQty,
  IncrementCartItemQty,
  RemoveProductFromCart
} from "../types/cartTypes/cartActions";

interface CartState {
  cartCount: number;
  items: CartProduct[];
}

const initialCartState: CartState = {
  cartCount: 0,
  items: []
};

export const cartDataSlice = createSlice({
  name: 'cart',
  initialState: initialCartState,
  reducers: {
    addToCart: (state, action: PayloadAction<AddProductToCart>) => {
      const cartProduct = { ...action.payload.product, qty: action.payload.qty };
      let itemInCart = false;
      state.items.forEach(item => {
        if (item.id === cartProduct.id) {
          itemInCart = true;
          item.qty += action.payload.qty;
        }
      });
      if (!itemInCart) {
        state.items.push(cartProduct);
      }
      state.cartCount += action.payload.qty;
    },
    removeFromCart: (state, action: PayloadAction<RemoveProductFromCart>) => {
      const indexToRemove = state.items.findIndex(item => item.id === action.payload.productId);
      state.cartCount -= state.items[indexToRemove].qty;
      state.items.splice(indexToRemove, 1);
    },
    incrementCartQty: (state, action: PayloadAction<IncrementCartItemQty>) => {
      state.items.map(item => {
        if (item.id === action.payload.productId) {
          item.qty += 1;
          state.cartCount += 1;
        }
        return item;
      });
    },
    decrementCartQty: (state, action: PayloadAction<DecrementCartItemQty>) => {
      state.items.map(item => {
        if (item.id === action.payload.productId) {
          item.qty -= 1;
          state.cartCount -= 1;
        }
        return item;
      });
    }
  }
});

export const {
  addToCart,
  removeFromCart,
  incrementCartQty,
  decrementCartQty
} = cartDataSlice.actions;

export default cartDataSlice.reducer;