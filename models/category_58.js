const db=require('../utils/database');

const category_58=class category_58{

    constructor(id,name,size,remote_url,local_url,link_url){
        this.id=id;
        this.name=name;
        this.size=size;
        this.remote_url=remote_url;
        this.local_url=local_url;
        this.link_url=link_url;
    }

    //get all categories

    static async fetchAll(){
        try{
            let results=await db.query(`SELECT * from category_58`);
            //console.log('fetchAll results', JSON.stringify(results.rows));
            return results.rows;
        }catch(err){
            console.log('error',err);
        }
    }
}

//testing
//const test=async ()=>{
//    let results=await category_58.fetchAll();
//    console.log('results',JSON.stringify(results));
//}

//test();

module.exports=category_58;