const express = require('express');
const router = express.Router();

const Carousel = require('../models/carousel.model');

const crudController = require('./crud.controller');

//--------CRUD APIS for products-----------
//post
router.post('', crudController.post(Carousel));

//get
router.get('', crudController.get(Carousel));

//update
router.patch('/:id', crudController.updateOne(Carousel));

//delete
router.delete('/:id', crudController.deleteOne(Carousel));

//get a product
router.get('/:id', crudController.getOne(Carousel));

module.exports = router;