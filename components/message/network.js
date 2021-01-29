const express = require('express');
const response = require('../../network/response');
const router = express.Router();

router.get('/', function(req,res){
    console.log(req.headers) ;
    res.header({
        "custom-header":"nuestro valor personalizado"
    })
    
    response.success(req,res, 'Lista de mensajes');
});

router.delete('/', function(req,res){
    //res.send('Mensaje eliminado');
    response.success(req,res, 'Mensaje eliminado');
});

router.post('/', function(req,res){
    console.log(req.query);
    if(req.query.error =='ok'){
        response.error(req,res, 'Error inesperado', 500, 'Es solo una simulacion de un error');
    }else{
         response.success(req,res, 'Mensaje creado correctamente', 201);
    }
    console.log(req.body);
   
});

module.exports = router;