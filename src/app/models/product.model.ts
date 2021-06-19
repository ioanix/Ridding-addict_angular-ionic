export class Product {

  productCode: string;
  name: string;
  price: number;
  quantity: number;
  shortDescription: string;
  category: Category;
  dateAdded: number;

  bikeType: BikeType;
  accessoryType: AccessoryType;
}

export enum Category {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  BIKE,
  // eslint-disable-next-line @typescript-eslint/naming-convention
  ACCESSORY
}

export enum BikeType {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  CITYBIKE,
  // eslint-disable-next-line @typescript-eslint/naming-convention
  ELECTRICBIKE,
  // eslint-disable-next-line @typescript-eslint/naming-convention
  MOUNTAINBIKE
}

export enum AccessoryType {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  LIGHTS,
  // eslint-disable-next-line @typescript-eslint/naming-convention
  LOCKS
}

export const BIKE_TYPES = ['CITYBIKE', 'ELECTRICBIKE', 'MOUNTAINBIKE'];
export const CATEGORIES_BIKE = ['BIKE'];
export const CATEGORIES_ACCESSORY = ['ACCESSORY'];

