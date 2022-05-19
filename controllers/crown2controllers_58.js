const category_58=require('../models/category_58');
const shop_58=require('../models/shop_58');

exports.getcategories = async (req,res) => {
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
}