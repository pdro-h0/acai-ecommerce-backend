import { OrderedItem } from "./ordered-item";

export interface Ordered {
  orderedId: string;
  date: Date;
  items: OrderedItem[];
  totalValor: number;
}
