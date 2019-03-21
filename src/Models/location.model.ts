import { Document, Schema, Model, model } from "mongoose";

/** Product location model */
export interface IProductLocation extends Document {
  /** Product ID - Foreign key to a product */
  productId: String;
  /** Coordinates of said product */
  coords: ICoord;
}

/** Coordinate model */
export interface ICoord extends Document {
  /** X coordinate */
  x: Number;
  /** Y Coordinate */
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
  productId: {
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
