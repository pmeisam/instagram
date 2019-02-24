var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    userName: String,
    googleId: String,
    email: String
},{
    timestamps: true
})

module.exports = mongoose.model('User', userSchema);