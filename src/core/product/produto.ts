import { Precied } from "./priced";

export interface Product extends Precied {
  productId: string;
  name: string;
  description: string;
  image: string;
}
