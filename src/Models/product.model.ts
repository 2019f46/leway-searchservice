import { ICoord } from "Models/location.model";

export interface IProduct {
  id: string;
  image: string;
  name: string;
  quantity: string;
  description: string;
  price: string;
  location?: ICoord;
}