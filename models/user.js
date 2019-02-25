var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var uploadSchema = new Schema({
    photo: String,
    userName: String,
    caption: String,
    comment: String,
    like: Number,
    created: {
        type: Date,
        default: new Date().getTime()
    }
})

var userSchema = new Schema({
    userName: String,
    googleId: String,
    email: String,
    photos: [uploadSchema]
},{
    timestamps: true
})

module.exports = mongoose.model('User', userSchema);