import express from "express";
import { createProduct, deleteProduct, getProducts, updateQuantity } from "../controller/controller.js";

export const productRouter = express.Router();


productRouter.route('/create').post(createProduct);
productRouter.route('/').get(getProducts);
productRouter.route('/delete/:id').delete(deleteProduct);
productRouter.route('/:id/update_quantity').put(updateQuantity);