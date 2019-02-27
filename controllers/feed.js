var Users = require('../models/user');
var Images = require('../models/image');

module.exports = {
    index
}

function index(req, res, next) {
    Images.find({},function(err, image){
        if (err) redirect("/")
        res.render('meisagram/feed', { title: 'Meisagram' , image });
    })
}



