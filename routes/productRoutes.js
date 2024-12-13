const express = require("express");
const Product = require("../models/product");

const router = express.Router();
//create a product
router.post("/products", async (req, res) => {
  try {
    const product = new Product(req.body);
    const savedProduct = await product.save();

    res.status(200)(savedProduct);
  } catch (error) {
    return res.status(400).json({ message: "Error" });
  }
});
//get all products

router.get("/products", async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});
//get a single product
router.get("/products/:id", async (req, res) => {
  try {
    const products = await Product.findById(req.params.id);
    if (!products) {
      res.status(500).json({ message: "Product doesn't exist" });
    }
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: message.error });
  }
});
//update a single product
router.put("/products/:id", async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      req.body
    );
    if (!updatedProduct) {
      res.status(500).json({ message: error.message });
    }
    res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//delete a product
router.delete("/products/:id", async (req, res) => {
  try {
    const deletedProduct = await Product.findByIdAndDelete(req.params.id);
    if (!deletedProduct) {
      res.status(400).json({ message: error.message });
    }
    res.status(200).json({ message: "successfully deleted" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});
module.exports=router;
