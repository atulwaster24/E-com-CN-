import mongoose from "mongoose";

let URL = 'mongodb://localhost:27017/productsDB';

const connectToDB = async ()=>{
    try {
        await mongoose.connect(URL);
        console.log('Connected to the Database.')
    } catch (error) {
        console.log('Failed to connect to the database.')
    }
}

export default connectToDB;