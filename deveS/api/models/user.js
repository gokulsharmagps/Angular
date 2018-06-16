const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name:String,
    about:String,
    state:String,
    age:Number,
    eth:String,
    race:String,
    sex:String,
    height:Number,
    weight:Number,

});

module.exports = mongoose.model('User', userSchema);
