import Picture from "../models/Picture.js";
import fs from "fs";

class pictureController{
    static async createPicture(req, res) {
        try {
          const { name } = req.body;
          const picture = new Picture({
            name,
            src: req.file.path.replace(/\\/g, "/"),
          });

          await picture.save();
          res.json({ picture, msg: 'Picture saved successfully'});  
        } catch (error) {
          res.status(500).json({ message: `${error.message} - Failed to create Picture` });
        }
    }
    static async getAllPictures(req, res) {
        try {
          const pictures = await Picture.find();
          res.json(pictures);
        } catch (error) {
          res.status(500).json({ message: `${error.message} - Failed to retrieve Pictures` });
        }
      }
    
      static async getPictureById(req, res) {
        try {
          const pictureId = req.params.id;
          const picture = await Picture.findById(pictureId);
          if(!picture) {
            return res.status(404).json({ message: 'Picture not found' });
          }
          res.json(picture);
        } catch (error) {
          res.status(500).json({ message: `${error.message} - Failed to retrieve Picture by ID` });
        }
      }
    
      static async updatePicture(req, res) {
        try {
          const pictureId = req.params.id;
          const { name } = req.body;
          const updatedPicture = await Picture.findByIdAndUpdate(pictureId, { name }, { new: true });
          res.json({ updatedPicture, msg: 'Picture updated successfully' });
        } catch (error) {
          res.status(500).json({ message: `${error.message} - Failed to update Picture` });
        }
      }
    
      static async deletePicture(req, res) {
        try {
          const pictureId = req.params.id;
          const deletedPicture = await Picture.findByIdAndRemove(pictureId);
      
          if (!deletedPicture) {
           return res.status(404).json({ message: 'Picture not found' });
          }

          res.json({ msg: 'Picture deleted successfully' });
        } catch (error) {
          res.status(500).json({ message: `${error.message} - Failed to delete Picture` });
        }
      }
    
};

export default pictureController;
