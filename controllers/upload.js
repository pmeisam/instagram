var User = require('../models/user');
const multer = require('multer');

module.exports = {
    show,
    create
}

function create(req, res) {
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



