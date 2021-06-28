import {CardType} from './order.model';

export class Card {

  cardHolderName: string;
  cardNumber: string;
  cvvCode: number;
  expirationDate: string;
  cardType: CardType;
}
