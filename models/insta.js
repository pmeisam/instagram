var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var commentSchema = new Schema({
    comment: String
}, {
    timestamps: true
});



var photoSchema = new Schema({
    
    comments: [commentSchema]
}, {
    timestamps: true
})

var instaSchema = new Schema({
    name: String,
    // photos: [photosSchema],
    googleId: String
},{
    timestamps: true
})

module.exports = mongoose.model('Insta', instaSchema);