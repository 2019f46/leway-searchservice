import { Document, Schema, Model, model } from "mongoose";

export interface IProduct extends Document {
  id: string;
  image: string;
  name: string;
  quantity: string;
  description: string;
  price: string;
}