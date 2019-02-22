var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var photosSchema = new Schema(
    {
        text: String
      }, {
        timestamps: true
      }
);

var instaSchema = new Schema({
    name: String,
    email: String,
    photos: [photosSchema],
    facebookId: String
},{
    timestamps: true
})

module.exports = mongoose.model('Insta', instaSchema);