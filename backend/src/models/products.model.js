const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    listOfImages: [{ type: String, required: true }],
    options: [{ type: String, required: false }],
    name: { type: String, required: true },
    description: { type: String, required: true },
    productid: { type: Number, required: true },
    quantity: { type: Number, required: true },
    rating: { type: Number, required: true },
    brandname: { type: String, required: true },

}, {
    versionKey: false,
    timestamps: true
});

const Product = mongoose.model("product", productSchema);

module.exports = Product;