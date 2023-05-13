import { Schema, model } from "mongoose";
import { IProduct } from "./product.interface";

//step2 : Schema
const productSchema = new Schema<IProduct>({
  id: { type: Number, required: true, unique: true },
  name: { type: String, required: true },
  price: { type: Number, required: true },
  discount: { type: Number, default: 10 },
});

//step3 : model
export const Product = model<IProduct>("store", productSchema);
