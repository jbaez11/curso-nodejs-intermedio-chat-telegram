const db = require('mongoose');
const Model = require('./model');
//mongodb://Hola1099:Hola1099@cluster0-shard-00-00.xurmg.mongodb.net:27017,cluster0-shard-00-01.xurmg.mongodb.net:27017,cluster0-shard-00-02.xurmg.mongodb.net:27017/<dbname>?ssl=true&replicaSet=atlas-b3c9zs-shard-0&authSource=admin&retryWrites=true&w=majority

db.Promise = global.Promise;
db.connect('mongodb://Hola1099:Hola1099@cluster0-shard-00-00.xurmg.mongodb.net:27017,cluster0-shard-00-01.xurmg.mongodb.net:27017,cluster0-shard-00-02.xurmg.mongodb.net:27017/<dbname>?ssl=true&replicaSet=atlas-b3c9zs-shard-0&authSource=admin&retryWrites=true&w=majority',{
    useNewUrlParser: true, useUnifiedTopology: true 
});

console.log('DB conectada con exito');

function addMessage(message){
   // list.push(message);
   const myMessage = new Model(message);
   myMessage.save();

}

async function getMessage(){
    //return list;
    const messages = await Model.find();
    return messages;
}

module.exports= {
    add:addMessage,
    list:getMessage,
}