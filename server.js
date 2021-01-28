const express = require('express');
const bodyParser = require('body-parser');
const response = require('./network/response');
const router = express.Router();

 var app = express();
 app.use(bodyParser.json());
 app.use(bodyParser.urlencoded({ extended: true }));
 app.use(router);


router.get('/message', function(req,res){
    console.log(req.headers) ;
    res.header({
        "custom-header":"nuestro valor personalizado"
    })
    //res.send('Lista de mensajes');
    response.success(req,res, 'Lista de mensajes');
});

router.delete('/message', function(req,res){
    //res.send('Mensaje eliminado');
    response.success(req,res, 'Mensaje eliminado');
});

router.post('/message', function(req,res){
    console.log(req.query);
    if(req.query.error =='ok'){
        response.error(req,res, 'Error inesperado', 500, 'Es solo una simulacion de un error');
    }else{
         response.success(req,res, 'Mensaje creado correctamente', 201);
    }
    console.log(req.body);
    // res.status(201).send({
    //     error: '',
    //     body: 'Creado correctamente'
    // });
   
    //res.send('Mensaje ' + req.body.text + 'añadido correctamente');
});
// app.use('/', function(req, res){
//     res.send('Hola');
// });

app.use('/app', express.static('public'));
app.listen(3000);

console.log('la aplicacion esta escuchando en el puerto 3000');