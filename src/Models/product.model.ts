import { Document, Schema, Model, model } from "mongoose";

export interface IProduct extends Document {
  id: string;
  image: string;
  name: string;
  quantity: string;
  description: string;
  price: string;
}

export const ProductSchema: Schema = new Schema({
  id: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  quantity: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: String,
    required: true
  }
});

export const Products: Model<IProduct> = model<IProduct>(
  "Products",
  ProductSchema
);
