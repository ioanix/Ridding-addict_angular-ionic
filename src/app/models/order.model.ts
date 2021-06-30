import {Card} from './card.model';

export class Order {

  productCodes: string;
  cardDto: Card;
}

export enum CardType {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  VISA,
  // eslint-disable-next-line @typescript-eslint/naming-convention
  VISA_ELECTRON,
  // eslint-disable-next-line @typescript-eslint/naming-convention
  MASTERCARD,
  // eslint-disable-next-line @typescript-eslint/naming-convention
  MAESTRO
}

export const CARD_TYPES = ['VISA', 'VISA_ELECTRON', 'MASTERCARD', 'MAESTRO'];
