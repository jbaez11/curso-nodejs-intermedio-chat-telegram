const store = require('./store');
const { socket } = require('../../socket');
function addMessage(chat,user, message, file){

    return new Promise((resolve, reject) => {
        if(!chat || !user || !message){
            console.error('[Message Controller] no hay user o message');
            reject('Los datos son incorrectos');
            return false;
        }
        let fileUrl = '';
        if(file){
            fileUrl = 'http://localhost:3500/app/files/'+file.filename
        }
        const fullMessage = {
            chat:chat,
            user:user,
            message:message,
            date: new Date(),
            file:fileUrl
        }
        store.add(fullMessage);

        socket.io.emit('message',fullMessage)

        resolve(fullMessage);
    })
    
       
}

function getMessage(filterUser){
    return new Promise((resolve, reject)=>{
        resolve(store.list(filterUser));
    })
}


function updateMessage(id,message){
    return new Promise(async(resolve, reject)=>{
        console.log('id',id);
        console.log('message',message);
        if(!id || !message){
            reject('Invalid Data');
            return false;
        }
        const result = await store.updateText(id,message);

        resolve(result)
    })
}

function deleteMessage(id){
    return new Promise((resolve,reject)=> {
        if(!id){
            reject('id invalido');
            return false;
        }
        store.remove(id)
            .then(() => {
                resolve();
            })
            .catch(e =>{
                reject(e);
            })
    });
}

module.exports= {
    addMessage,
    getMessage,
    updateMessage,
    deleteMessage,
}