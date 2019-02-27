var mongoose = require('mongoose');
var Schema = mongoose.Schema;



var imageSchema = new Schema({
    url: String,
    caption: String,
    user: String,
    gId: String,
    likes: [],
    comments: [{
        user: String,
        comment: String
    }]
},{
    timestamps: true
})

module.exports = mongoose.model('Image', imageSchema);  