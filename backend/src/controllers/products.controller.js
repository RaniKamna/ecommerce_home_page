const express = require('express');
const router = express.Router();

const Product = require('../models/products.model');

const crudController = require('./crud.controller');

//--------CRUD APIS for products-----------
//post
router.post('', crudController.post(Product));

//get
router.get('', crudController.get(Product));

//update
router.patch('/:id', crudController.updateOne(Product));

//delete
router.delete('/:id', crudController.deleteOne(Product));

//get a product
router.get('/:id', crudController.getOne(Product));

module.exports = router;