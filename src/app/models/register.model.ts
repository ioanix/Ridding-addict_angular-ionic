import {Card} from './card.model';

export class Register {

  firstName: string;
  lastName: string;
  username: string;
  email: string;
  password: string;
  role: typeof ROLES;
  //card: Card;
}

export const ROLES = ['ROLE_ADMIN', 'ROLE_USER'];

