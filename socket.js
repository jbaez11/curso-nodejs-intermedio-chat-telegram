const socketIO = require('socket.io');
const socket = {};//objetos se guardan como referencia, son como los punteros en c

function connect(server){
    socket.io= socketIO(server);
}

module.exports = {
    connect,
    socket,
}