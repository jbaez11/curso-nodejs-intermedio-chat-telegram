const express = require('express');
const bodyParser = require('body-parser');

const db = require('./db');

//const router = require('./components/message/network');
const router = require('./network/routes');
 db('mongodb://Hola1099:Hola1099@cluster0-shard-00-00.xurmg.mongodb.net:27017,cluster0-shard-00-01.xurmg.mongodb.net:27017,cluster0-shard-00-02.xurmg.mongodb.net:27017/<dbname>?ssl=true&replicaSet=atlas-b3c9zs-shard-0&authSource=admin&retryWrites=true&w=majority');
 
 var app = express();
 app.use(bodyParser.json());
 app.use(bodyParser.urlencoded({ extended: true }));
 //app.use(router);
 router(app);


app.use('/app', express.static('public'));
app.listen(3500);

console.log('la aplicacion esta escuchando en el puerto 3500');