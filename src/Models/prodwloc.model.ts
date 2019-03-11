import { Document, Schema, Model, model } from "mongoose";
import { ICoord, CoordSchema } from "./location.model";
import { IProduct } from "./product.model";

export interface IProdwloc extends Document {
  product: IProduct;
  location: ICoord;
}
