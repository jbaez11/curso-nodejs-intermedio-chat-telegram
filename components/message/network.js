const express = require('express');
const response = require('../../network/response');
const controller = require('./controller');
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
    
    controller.addMessage(req.body.user, req.body.message)
        .then((fullMessage)=>{
            response.success(req,res, fullMessage, 201);
        })
        .catch(e => {
            response.error(req,res, 'Informacion Invalida', 400, 'error en el controller');
        });
    
   
   
});

module.exports = router;