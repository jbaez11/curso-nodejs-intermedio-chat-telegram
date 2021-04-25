const express = require('express');
const app = express();
const server = require('http').Server(app);

const cors = require('cors')
const bodyParser = require('body-parser');
const socket = require('./socket');
const db = require('./db');
const router = require('./network/routes');


db('mongodb://Hola1099:Hola1099@cluster0-shard-00-00.xurmg.mongodb.net:27017,cluster0-shard-00-01.xurmg.mongodb.net:27017,cluster0-shard-00-02.xurmg.mongodb.net:27017/telegrams?ssl=true&replicaSet=atlas-b3c9zs-shard-0&authSource=admin&retryWrites=true&w=majority');
 
 app.use(cors());
 app.use(bodyParser.json());
 app.use(bodyParser.urlencoded({ extended: false }));
 
socket.connect(server);
 router(app);


app.use('/app', express.static('public'));
server.listen(3000, function(){
    console.log('La aplicacion esta escuchando en http://localhost:3000')
});

console.log('la aplicacion esta escuchando en el puerto 3000');