const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    sku:String,
    name:String,
    price:String
});

//Model
const Product = mongoose.model("Product",ProductSchema);

module.exports = Product;