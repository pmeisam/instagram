var mongoose = require('mongoose');
var Schema = mongoose.Schema;



var imageSchema = new Schema({
    url: String,
    id: String,
    created: {
        type: Date,
        default: new Date().getTime()
    }
},{
    timestamps: true
})

module.exports = mongoose.model('Image', imageSchema);