const { Pool }=require('pg');

const isProduction =process.env.NODE_ENV==='production';

let pool;
 if(isProduction){
     pool =new Pool({
         connectionString: process.env.DATABASE_URL,
         ssl:{ rejectUnauthorized : false}
     } )
}else{
    pool =new Pool({
        user:'postgres',
        host:'localhost',
        port:'5432',
        database:'crown_58',
        password:'0000',
    });
 }

module.exports = pool;



/*
postgres://kveihzrlaascfn:a1a5f37a2ea3d5904a10eb280498707195137df9b80184e9026aab2d00683cdf@ec2-54-173-77-184.compute-1.amazonaws.com:5432/df2330ehlaohv9
user:'kveihzrlaascfn',
host:'ec2-54-173-77-184.compute-1.amazonaws.com',
port:'5432',
database:'df2330ehlaohv9',
password:'a1a5f37a2ea3d5904a10eb280498707195137df9b80184e9026aab2d00683cdf',
*/