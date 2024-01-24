import {ProductModel} from '../model/model.js'


export const getProducts = async (req, res, next)=>{
    try {
        const products = await ProductModel.find();
        
        res.status(200).json({data: products});
    } catch (error) {
        res.status(400).json({msg: error.message});
    }
}

export const createProduct = async (req, res, next)=>{
    const {name, quantity} = req.body;
    try {
        const newProduct = new ProductModel({
            name,
            quantity
        });
        const product = await newProduct.save();
        res.status(201).json({data: {product}})
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}

export const deleteProduct = async (req, res, next)=>{
    const id = req.params.id;
    try {
        const deletion = await ProductModel.findByIdAndDelete(id);
        if(deletion){
            res.status(200).json({message: "Product Deleted"})
        }
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}

export const updateQuantity = async (req, res, next)=>{
    const id= req.params.id;
    let quantity = Number(req.query.number);

    try {
        const product = await ProductModel.findById(id);
        let updatedQuantity = product.quantity + quantity;

        const update = await ProductModel.findOneAndUpdate({_id: id}, {$set: {quantity: updatedQuantity}}, {new: true});
        if(update){
            res.status(200).json({data: {product: update}, message: 'update successful'})
        }
    } catch (error) {
        res.status(500).json({msg: error.message})
    }
}