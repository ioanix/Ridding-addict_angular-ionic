import {Product} from './product.model';

export class OrderResponse {

  products: Product[];
  customer: string;
  totalAmountPaid: number;
}
