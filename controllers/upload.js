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
    console.log('req.user: ', req.user)
    image.userId = req.user.id;
    image.userId = req.user
    image.gId = req.user.googleId;
    Image.create( image , function(err, image){
        req.user.photos.unshift(image);
        req.user.save(function (err) {
            res.redirect(`/feed`);
        });
    });

    
}

function show(req, res, next) {
    res.render('meisagram/upload', { title: 'Memesagram', user: req.user })
}

