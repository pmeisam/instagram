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
    Image.create(image) // save image information in database
        // .then(newImage => res.redirect('/feed'))
        // .catch(err => console.log(err));

    req.user.photos.unshift({
        caption: req.body.caption,
        photo: req.file.url,
        userName: req.user.userName,
        created: new Date().getTime()
    });

    req.user.save(function (err) {
        res.redirect(`/feed`);
    })
}

function show(req, res, next) {
    res.render('meisagram/upload', { title: 'Meisagram' })
}



