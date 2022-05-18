var express = require('express');
var router = express.Router();

const category_58=require('../models/category_58');
/* GET home page. */
router.get('/', async function(req, res, next) {
  try{

    let results=await category_58.fetchAll();
    console.log('results',JSON.stringify(results));
    res.render('crown2_58/index', { 
      data: results,
      id: '409411658',
      title:'Crown2_DB' });

  }catch(err){
    console.log(err);
  }

  
});


router.get('/shop_58/:category',async function(req,res){
  console.log('category',req.params.category);
  try{
    const cid =await category_58.fetchCatIdByName(req.params.category);
    console.log('cid',cid);
    //const results = shop_58.fetchProductBycategory(cid);
    let results=await shop_58.fetchProductsByShop(1);
    console.log('test results',JSON.stringify(results));

  }catch(err){
    console.log(err);
  }
});

module.exports = router;
