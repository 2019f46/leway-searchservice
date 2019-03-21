import { ICoord } from "Models/location.model";

/** Product model interface
 * Is used to represent the products on the API, not necaserily in the database
 */
export interface IProduct {
  /** Identifyer */
  id: string;
  /** URL to an image */
  image: string;
  /** Product name */
  name: string;
  /** Amounts of product in the store */
  quantity: string;
  /** Product description */
  description: string;
  /** Product price */
  price: string;
  /** Product location. Might not exist. */
  location?: ICoord;
}