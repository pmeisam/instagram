var Users = require('../models/user');
var Images = require('../models/image');

module.exports = {
    index
}

function index(req, res, next) {
    Images.find({}).exec(function(err, image){
        if(err) res.redirect('/');
        // console.log("the userId:", image[0].populate('userId'));
        image.forEach((i) => {
            i.populate('userId');
            // console.log("images are: ", i);
        })
        // console.log("images are: ", image)
        var user = req.user;
        res.render('meisagram/feed', { title: 'Memesagram' , image , user});
    })
       
}
