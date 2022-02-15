const express = require('express');

const app = express();
app.use(express.json());

const productController = require('./controllers/products.controller');
const carouselController = require('./controllers/carousel.controller');

app.use('/products', productController);
app.use('/carousels', carouselController);

module.exports = app;