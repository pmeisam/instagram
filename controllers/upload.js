var User = require('../models/user');
var Image = require('../models/image');
const multer = require('multer');

module.exports = {
    show,
    create
}

function create(req, res) {
    const image = {};
    image.url = req.file.url;
    image.caption = req.body.caption;
    image.user = req.user.userName;
    image.avatar = req.user.avatar;
    console.log(req.user)
    image.gId = req.user.googleId;
    Image.create( image , function(err, image){
        req.user.photos.unshift(
            image
            // caption: req.body.caption,
            // photo: req.file.url,
            // userName: req.user.userName,
            // images: image.create(image)
        );
        req.user.save(function (err) {
            res.redirect(`/feed`);
        });
    });

    
}

function show(req, res, next) {
    res.render('meisagram/upload', { title: 'Meisagram' })
}

