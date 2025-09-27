const express = require('express');
const {AddnewProductController,getAllProductsController,filterController} = require('../controllers/productController')
const router = express.Router();

router.post('/addproduct',AddnewProductController);
router.get('/getallproducts',getAllProductsController);
router.post('/filter',filterController);

module.exports = router;