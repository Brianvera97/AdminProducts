const mongoose = require("mongoose")

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "the title is required"]
    },
    price: {
        type: Number,
        required: [true, "the price is required"]
    },
    description: {
        type: String,
        required: [true, "the description is required"]
    }
}, { timestamps: true, versionKey: false })

const Product = new mongoose.model("Product", ProductSchema)

module.exports = Product