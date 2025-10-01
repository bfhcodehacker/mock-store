import { Product } from "../product";

export interface CartProduct extends Product {
  qty: number;
}