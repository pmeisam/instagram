var mongoose = require('mongoose');
var Schema = mongoose.Schema;



var imageSchema = new Schema({
    url: String,
    caption: String,
    user: String,
    created: {
        type: Date,
        default: new Date().getTime()
    }
},{
    timestamps: true
})

module.exports = mongoose.model('Image', imageSchema);