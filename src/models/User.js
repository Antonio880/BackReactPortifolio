import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    githubId: { type: String }, // O ID do usuário do GitHub
    username:  { type: String }
  }, { versionKey: false });

const user = mongoose.model('User', userSchema);

export { user, userSchema };