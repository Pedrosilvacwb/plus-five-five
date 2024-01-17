import { Document, Schema, model, models } from "mongoose";

export interface IProducts extends Document {
  name: string;
  description: string;
  price: number;
}

const ProductsSchema = new Schema({
  name: { type: String },
  description: { type: String },
  price: { type: Number },
});

const Products = models.Products || model("Products", ProductsSchema);

export default Products;
