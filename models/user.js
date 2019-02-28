var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    userName: String,
    email: String,
    googleId: String,
    email: String,
    avatar: String,
    photos: [{
        type: Schema.Types.ObjectId,
        ref:'Image'
    }]
},{
    timestamps: true
})

module.exports = mongoose.model('User', userSchema);