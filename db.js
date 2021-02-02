const db = require('mongoose'); 


db.Promise = global.Promise;
//mongodb://Hola1099:Hola1099@cluster0-shard-00-00.xurmg.mongodb.net:27017,cluster0-shard-00-01.xurmg.mongodb.net:27017,cluster0-shard-00-02.xurmg.mongodb.net:27017/<dbname>?ssl=true&replicaSet=atlas-b3c9zs-shard-0&authSource=admin&retryWrites=true&w=majority
async function connect(url){

   await db.connect(url,{
        useNewUrlParser: true, useUnifiedTopology: true 
    });

    console.log('DB conectada con exito');
}


module.exports = connect;
