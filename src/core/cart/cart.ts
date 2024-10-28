import { Product } from "../product";
import { CartItem } from "./cart-item";

export class Cart {
  constructor(readonly items: CartItem[] = []) {}

  private IsProductAlreadyOnCart(product: Product) {
    // return this.items.some(
    //   (cartItem) => cartItem.product.productId === product.productId
    // );

    return this.items.find(
      (item) => item.product.productId === product.productId
    );
  }

  private changeItemQuantity(
    items: CartItem[],
    product: Product,
    diference: number
  ) {
    return items
      .map((item) =>
        item.product.productId === product.productId
          ? { ...item, quantity: item.quantity + diference }
          : item
      )
      .filter((item) => item.quantity > 0);
  }

  addItem(product: Product) {
    const item = this.IsProductAlreadyOnCart(product);

    if (item) {
      return new Cart(this.changeItemQuantity(this.items, product, 1));
    } else {
      return new Cart([...this.items, { product, quantity: 1 }]);
    }
  }

  removeItem(product: Product) {
    const item = this.IsProductAlreadyOnCart(product);
    if (!item) return this;

    return new Cart(this.changeItemQuantity(this.items, product, -1));
  }

  removeProduct(product: Product) {
    const item = this.IsProductAlreadyOnCart(product);
    if (!item) return this;

    return new Cart(
      this.items.filter((item) => item.product.productId !== product.productId)
    );
  }

  clear() {
    return new Cart();
  }

  get itemsQuantity() {
    return this.items.map((item) => item.quantity).reduce((a, b) => a + b, 0);
  }

  GetOneItemQuantity(product: Product) {
    const item = this.items.find(
      (item) => item.product.productId === product.productId
    );

    return item?.quantity;
  }

  get totalValor() {
    return this.items
      .map((item) => item.product.promotionalPrice * item.quantity)
      .reduce((a, b) => a + b, 0);
  }

  get fullTotalValor() {
    return this.items
      .map((item) => item.product.basePrice * item.quantity)
      .reduce((a, b) => a + b, 0);
  }
}
