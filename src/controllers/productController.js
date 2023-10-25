import Product from "../models/Product.js";
import { user } from "../models/User.js";

class ProductController {
  static async listProducts(req, res) {
    try {
      const productList = await Product.find({});
      res.status(200).json(productList);
    } catch (error) {
      res.status(500).json({ message: `${error.message} - Failed to retrieve products` });
    }
  }

  static async listProductById(req, res) {
    try {
      const id = req.params.id;
      const productFound = await Product.findById(id);
      res.status(200).json(productFound);
    } catch (error) {
      res.status(500).json({ message: `${error.message} - Failed to retrieve product by ID` });
    }
  }

  static async createProduct(req, res) {
    const newProduct = req.body;
    try {
      const userEncontrado = await user.findById(newProduct.user);
      if (!userEncontrado) {
        return res.status(404).json({ message: "Usuário não encontrado" });
      }
      const productCompleted = { ...newProduct, user: { ...userEncontrado._doc } };
      const productCreated = await Product.create(productCompleted);
      res.status(201).json({ message: "Product created successfully", product: productCreated });
    } catch (error) {
      res.status(500).json({ message: `${error.message} - Failed to create product` });
    }
  }

  static async updateProduct(req, res) {
    try {
      const id = req.params.id;
      await Product.findByIdAndUpdate(id, req.body);
      res.status(200).json({ message: "Product updated successfully" });
    } catch (error) {
      res.status(500).json({ message: `${error.message} - Failed to update product` });
    }
  }

  static async deleteProduct(req, res) {
    try {
      const id = req.params.id;
      await Product.findByIdAndDelete(id);
      res.status(200).json({ message: "Product deleted successfully" });
    } catch (error) {
      res.status(500).json({ message: `${error.message} - Failed to delete product` });
    }
  }

  static async listProductByName(req, res) {
    const name = req.query.name;
    try {
      const productByName = await Product.find({ name: name });
      res.status(200).json(productByName);
    } catch (error) {
      res.status(500).json({ message: `${error.message} - Failed to retrieve product by name` });
    }
  }
}

export default ProductController;