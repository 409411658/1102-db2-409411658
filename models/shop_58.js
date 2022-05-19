const db=require('../utils/database');

const shop_58=class shop_58{

    constructor(id,name,cat_id,price,remote_url,local_url){
        this.id=id;
        this.name=name;
        this.cat_id=cat_id;
        this.price=price;
        this.remote_url=remote_url;
        this.local_url=local_url;
        
    }

    //get all categories

    static async fetchAll(){
        try{
            let results=await db.query(`SELECT * from shop_58`);
            //console.log('fetchAll results', JSON.stringify(results.rows));
            return results.rows;
        }catch(err){
            console.log('error',err);
        }
    }

    static async fetchProductsByShop(id){
        const query={
            text:`SELECT * from shop_58 where cat_id = $1`,
            values: [id]
        }
        try{
            let results=await db.query(query);
            return results.rows;
        }catch(err){
            console.log(err);
        }
    }
}

//testing
//const test=async ()=>{
//    let results=await shop_58.fetchProductsByShop(1);
//    console.log('test results',JSON.stringify(results));
//}

//test();

module.exports=shop_58;