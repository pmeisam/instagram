var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var commentSchema = new Schema ({
    user: String,
    comment: String
},{
    timestamps: true
})
var likeSchema = new Schema ({
    email: String
},{
    timestamps: true
})
var uploadSchema = new Schema({
    photo: String,
    userName: String,
    caption: String,
    comments: [commentSchema],
    like:[likeSchema],
    created: {
        type: Date,
        default: new Date().getTime()
    }
},{
    timestamps: true
})

var userSchema = new Schema({
    userName: String,
    email: String,
    googleId: String,
    email: String,
    photos: [uploadSchema]
},{
    timestamps: true
})

module.exports = mongoose.model('User', userSchema);