
const Model = require('./model');


function addUser(user){
   // list.push(message);
   const myUser = new Model(user);
  return  myUser.save();

}

function listUsers(){
    return Model.find();
}



module.exports= {
    add:addUser,
    list:listUsers,
}