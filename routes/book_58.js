var express = require('express');
var router = express.Router();

const db=require('../utils/database');

/* GET home page. */
router.get('/', async (req, res) =>{
    try{
        const results = await db.query('SELECT * FROM book_58');
        console.log('results',JSON.stringify(results.rows));
        res.render('book_58/index', {
            data: results.rows,
            id: '409411658',
            name:'TingAn' });

    }catch(err){
        console.log('error',error);
    }
  
});


router.get('/create',(req,res)=>{
    res.render('book_58/add_58',{
        id: '409411658',
        name:'TingAn',
    });
});
module.exports = router;