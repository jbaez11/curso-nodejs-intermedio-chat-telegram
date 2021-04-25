const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const mySchema = new Schema({
    user:{
        type:Schema.ObjectId,
        ref:'User',
    },
    message:{
        type: String,
        required : true,
    },
    date: Date
});

const model = mongoose.model('Mensaje', mySchema);
module.exports= model;