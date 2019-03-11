import { Document, Schema, Model, model } from "mongoose";

export interface IProductLocation extends Document {
  productId: String;
  coords: ICoord;
}

export interface ICoord extends Document {
  x: Number;
  y: Number;
}
export const CoordSchema: Schema = new Schema({
  x: {
    type: Number,
    required: true
  },
  y: {
    type: Number,
    required: true
  }
});

export const ProductLocationSchema: Schema = new Schema({
  productID: {
    type: String,
    required: true
  },
  coords: {
    type: CoordSchema,
    required: true
  }
});

export const ProductLocationModel: Model<IProductLocation> = model<IProductLocation>(
  "ProductLocation",
  ProductLocationSchema
);
