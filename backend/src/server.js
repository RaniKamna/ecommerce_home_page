const express = require('express')
const connect = require('./configs/db')

const productController = require('./controllers/products.controller');

const app = express();

app.use(express.json());
app.use('/products', productController);

app.listen(2342, async function () {
    await connect();
    console.log('listening on port 2342')
});