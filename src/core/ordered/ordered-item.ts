import { Product } from "../product";

export interface OrderedItem {
  id: string;
  product: Product;
  quantity: number;
  unitPrice: number;
}
