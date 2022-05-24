const category_58=require('../models/category_58');
const shop_58=require('../models/shop_58');

//create
exports.createProducts = async (req,res) =>{
  console.log('body',req.body);
  try {
    let results = await shop_58.create(req.body);
    console.log('results',JSON.stringify(results));
    res.json({
      msg : 'create -- body data received',
      data: results,
  });
  }catch (err) {
    console.log('err',err);
  }
};

//read
exports.getcategories = async (req,res) => {
    try{

        let results=await category_58.fetchAll();
        //console.log('results',JSON.stringify(results));
        res.render('crown2_58/index', { 
          data: results,
          id: '409411658',
          title:'Crown2_DB' });
    
      }catch(err){
        console.log(err);
      }
};

exports.getProductsBycategory = async (req,res) => {
    console.log('category',req.params.category);
  try{
    const cid =await category_58.fetchCatIdByName(req.params.category);
    //console.log('cid',cid);
    //const results = shop_58.fetchProductBycategory(cid);
    let results=await shop_58.fetchProductsByShop(cid);
    console.log('test results',JSON.stringify(results));

    res.render('crown2_58/products_58',{
      data:results,
      title:req.params.category,
      name:'TingAn Hsu',
      id:'409411658'
    });

  }catch(err){
    console.log(err);
  }
};

//update

exports.updateProducts = async (req,res) => {
  console.log('body',req.body);
  try{
    let results = await shop_58.update(req.body);
    res.json({
      msg:'Update successful',
      data:results,
    });
  }catch(err){
    console.log(err);
  }
};

//delete
exports.deleteProduct = async (req,res) => {
  console.log('delete id',req.params.id);
  try{
    const results = await shop_58.deleteById(req.params.id);
    res.json({
      msg: 'Deletion successful',
      data:results,
    });
  }catch(err){
    console.log(err);
  }
};
