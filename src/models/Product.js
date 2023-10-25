import mongoose from "mongoose";
import { userSchema } from "./User.js";

const productSchema = new mongoose.Schema({
  id: { type: mongoose.Schema.Types.ObjectId },
  name: { type: String, required: true },
  quantify: { type: Number },
  unitPrice: { type: Number, required: true },
  user: userSchema
}, { versionKey: false });

const Product = mongoose.model('Product', productSchema);

export default Product;