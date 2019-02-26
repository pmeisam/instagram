var Users = require('../models/user');
var Images = require('../models/image');
const multer = require('multer');

module.exports = {
    show,
    liking

}

function show(req, res, next) {
    res.render('meisagram/likes', { title: 'Meisagram' });
}

function liking(req, res, next) {
    Images.findById(req.params.id, function (err, image) {
        Users.findOne({ googleId: image.gId }, function (err, user) {
            // console.log("user: ", user)
            // console.log('googleId: ', user.googleId);
            var a = user.googleId;
            var photo = user.photos.find(p => p.photo === image.url);
            // ----------- I need a if statement here to know if the user has liked before so he can't like no more
            console.log("email: ", user.email);
            console.log('including: ', image.likeNo.includes(user.email));
            console.log('what includes: ', image.likeNo);
            console.log('user live: ', req.user);
            if(image.likeNo.includes(req.user.email)){
                res.redirect('/feed');
            }else {
                photo.like.push({ email: req.user.email });
                image.likeNo.push( req.user.email );
                image.save();
                user.save(function () {
                    res.redirect('/feed');
                });
            }
        });
    });
}