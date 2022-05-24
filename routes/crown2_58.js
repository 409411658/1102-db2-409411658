var express = require('express');
//const { getcategories } = require('../controllers/crown2controllers_58');
var router = express.Router();

const category_58=require('../models/category_58');
const shop_58=require('../models/shop_58');

const crown2controllers_58 = require('../controllers/crown2controllers_58');


//create
router.post('/products_58/create',crown2controllers_58.createProducts);

//read
router.get('/', crown2controllers_58.getcategories) ;
router.get('/shop_58/:category', crown2controllers_58.getProductsBycategory);

//update

router.post('/products_58/update',crown2controllers_58.updateProducts);

//delete
router.get('/products_58/delete/:id',crown2controllers_58.deleteProduct);




module.exports = router;
