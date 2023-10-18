import express from "express";
import pictureController from "../controllers/pictureController.js";
import upload from "../config/multer.js";

const routes = express.Router();

routes.get("/pictures", pictureController.getAllPictures);
routes.get("/pictures/:id", pictureController.getPictureById);
routes.post("/pictures", upload.single("file"), pictureController.createPicture);
routes.put("/pictures/:id", pictureController.updatePicture);
routes.delete("/pictures/:id", pictureController.deletePicture);


export default routes;