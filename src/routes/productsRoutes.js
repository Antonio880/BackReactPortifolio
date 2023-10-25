import express from "express";
import ProductController from "../controllers/productController.js";

const routes = express.Router();

routes.get("/products", ProductController.listProducts);
routes.get("/products/busca", ProductController.listProductByName);
routes.get("/products/:id", ProductController.listProductById);
routes.post("/products", ProductController.createProduct);
routes.put("/products/:id", ProductController.updateProduct);
routes.delete("/products/:id", ProductController.deleteProduct);


export default routes;