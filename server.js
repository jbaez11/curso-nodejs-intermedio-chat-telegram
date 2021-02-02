const express = require('express');
const bodyParser = require('body-parser');


//const router = require('./components/message/network');
const router = require('./network/routes');

 var app = express();
 app.use(bodyParser.json());
 app.use(bodyParser.urlencoded({ extended: true }));
 //app.use(router);
 router(app);


app.use('/app', express.static('public'));
app.listen(3500);

console.log('la aplicacion esta escuchando en el puerto 3500');