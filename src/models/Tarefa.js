import mongoose from "mongoose";
import { userSchema } from "./User.js";

const tarefaSchema = new mongoose.Schema({
  id: { type: mongoose.Schema.Types.ObjectId },
  task: { type: String, required: true },
  time: { type: String },
  isCompleted: { type: Boolean, default: false },
  category: { type: String },
  user: userSchema
}, { versionKey: false });

const Tarefa = mongoose.model('Tarefa', tarefaSchema);

export default Tarefa;