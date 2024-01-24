import express from 'express';
import connectToDB from './src/config/productsDB.js';
import { productRouter } from './src/router/router.js';


const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/products', productRouter)
app.get('/', (req, res)=>{
    res.send('Welcome to the E-com API')
})

app.listen(1000, ()=>{
    console.log('\nServer started at Port:', 1000);
    connectToDB()
})