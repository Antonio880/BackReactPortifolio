import mongoose from "mongoose";
import { autorSchema } from "./Autor.js";

const livroSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    title: { type: String, required: true },
    publisher: { type: String, required: true },
    price: { type: Number },
    pages: { type: Number },
    autor: autorSchema
}, { versionKey: false });

const Livro = mongoose.model('Livros', livroSchema);

export default Livro;