import mongoose from "mongoose";

const pictureSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    name: { type: String, required: true },
    src: { type: String, required: true },
}, { versionKey: false });

const Picture = mongoose.model('Pictures', pictureSchema);

export default Picture;