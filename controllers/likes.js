var User = require('../models/user');
const multer = require('multer');

module.exports = {
    show
   
}

function show(req, res, next) {
    res.render('meisagram/likes', { title: 'Meisagram' });
}