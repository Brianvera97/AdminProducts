const Product = require("../models/product.model");



module.exports.findAllProduct = async (req, res) => {
    try {
        const productos = await Product.find()
        res.status(200);
        res.json(productos);
    } catch (error) {
        res.status(500);
        res.json({ error: error });
    }
};

module.exports.findProduct = async (req, res) => {
    try {
        const producto = await Product.findOne({ _id: req.params.id });
        if (producto) {
            res.status(200);
            res.json(producto);
            return
        }
        res.status(404);
        res.json({ error: "Product not found" });
    } catch (error) {
        res.status(500);
        res.json({ error: error });
    }
};


module.exports.createProduct = async (req, res) => {
    try {
        const newProduct = await Product.create(req.body);
        res.status(201);
        res.json(newProduct);
    } catch (error) {
        res.status(500);
        res.json(error);
    }
};

module.exports.updateProduct = async (req, res) => {
    try {
        const updatedProduct = await Product.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true });
        res.status(200);
        res.json(updatedProduct);
    } catch (error) {
        res.status(500);
        res.json(error);
    }
};

module.exports.deleteProduct = async (req, res) => {
    try {
        const deletedProduct = await Product.deleteOne({ _id: req.params.id });
        res.status(200);
        res.json(deletedProduct);

    } catch (error) {
        res.status(500);
        res.json({ error: error });
    }
};