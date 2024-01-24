import mongoose from "mongoose";

const productSchema = mongoose.Schema({
    name: String, 
    quantity: Number
});

export const ProductModel = mongoose.model('Product', productSchema);