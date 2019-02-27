var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var commentSchema = new Schema({
    user: String,
    comment: String
},{
    timestamps: true
})

module.exports = mongoose.model('Comment', commentSchema);