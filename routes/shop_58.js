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

//delete
router.get('/delete/:id',async(req,res)=>{
    try{
        console.log('delete id',req.params.id);
        const query = {
            text:`DELETE FROM shop_58 WHERE id = $1`,
            values:[req.params.id],
        };
        const results= await db.query(query);
        res.redirect('/shop_58');
    }catch(err){
        console.log(err);
    }
});

//update
router.get('/update',async(req,res)=>{
    try{
        const query = {
            text:`UPDATE shop_58 SET name = $1, cat_id = $2,
            price = $3,remote_url = $4,local_url = $5 WHERE id = $6;`,
            values:[req.body.name,req.body.cat_id,req.body.price,req.body.remote_url,req.body.local_url,req.body.id],
        };
        await db.query(query);
        res.redirect('/shop_58');
    }catch(err){
        console.log(err);
    }
});


//edit
router.get('/edit/:id',async(req,res)=>{
    const id=req.params.id;
    console.log('id',id);
    try{
        const query = {
            text:`SELECT * FROM shop_58 WHERE id=$1;`,
            values:[id],
        };
        const results = await db.query(query);
        data=results.rows;
        res.render('shop_58/edit_58',{
            id:data[0].id,
            name:data[0].name,
            cat_id:data[0].cat_id,
            price:data[0].price,
            remote_url:data[0].remote_url,
            local_url:data[0].local_url,

        });
    }catch(err){
        console.log(err);
    }
});


router.get('/create',(req,res)=>{
    res.render('shop_58/add_58',{
        id: '409411658',
        name:'TingAn',
    });
});
module.exports = router;