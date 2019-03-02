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
    // console.log('req.user: ', req.user)
    image.userId = req.user.id;
    image.userId = req.user
    image.gId = req.user.googleId;
    image.adrs = req.user.adrs;
    Image.create( image , function(err, img){
        img.populate('userId', function(err, i){
            req.user.photos.unshift(i);
            req.user.save(function (err) {
                res.redirect(`/feed`);
        });
        });
    });

    
}

function show(req, res, next) {
    res.render('meisagram/upload', { title: 'Memesagram', user: req.user })
}

