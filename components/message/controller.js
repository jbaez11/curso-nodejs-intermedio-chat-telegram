const store = require('./store');
function addMessage(user, message){

    return new Promise((resolve, reject) => {
        if(!user || !message){
            console.error('[Message Controller] no hay user o message');
            reject('Los datos son incorrectos');
            return false;
        }
        const fullMessage = {
            user:user,
            message:message,
            date: new Date(),
        }
        store.add(fullMessage);
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