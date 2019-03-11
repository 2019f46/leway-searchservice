import { Document, Schema, Model, model } from "mongoose";
import { ICoord, CoordSchema } from "./location.model";
import { IProduct, ProductSchema } from "./product.model";

export interface IProdwloc extends Document {
  product: IProduct;
  location: ICoord;
}

export const ProdwlocSchema: Schema = new Schema({
  product: {
    type: ProductSchema,
    required: true
  },
  location: {
    type: CoordSchema,
    required: false
  }
});

export const ProdwlocModel: Model<IProdwloc> = model<IProdwloc>(
  "Prodwloc",
  ProdwlocSchema
);
