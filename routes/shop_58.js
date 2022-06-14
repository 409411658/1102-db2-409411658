var express = require('express');
var router = express.Router();

const db=require('../utils/database');

//create

router.post('/create',async (req,res)=>{
    console.log('body',req.body);
    const id= req.body.id;
    const name= req.body.name;
    const cat_id= req.body.cat_id;
    const price= req.body.price;
    const remote_url= req.body.remote_url;
    const local_url= req.body.local_url;

    try{
        const query ={
            text:'INSERT INTO shop_58(id,name,cat_id,price,remote_url,local_url) VALUES ($1,$2,$3,$4,$5,$6)',
            values:[id,name,cat_id,price,remote_url,local_url],
        };
        await db.query(query);
        res.redirect('/shop_58');
    }catch(error){
        console.log(error);
    }
});
/* GET home page. */
//read
router.get('/', async (req, res) =>{
    try{
        const results = await db.query('SELECT * FROM shop_58');
        console.log('results',JSON.stringify(results.rows));
        res.render('shop_58/index', {
            data: results.rows,
            id: '409411658',
            name:'TingAn' });

    }catch(err){
        console.log('error',error);
    }
  
});


router.get('/create',(req,res)=>{
    res.render('shop_58/add_58',{
        id: '409411658',
        name:'TingAn',
    });
});
module.exports = router;