var Insta = require('../models/insta');
const multer = require('multer');

module.exports = {
    show
    
}

function show(req, res, next) {
    res.render('meisagram/search', { title: 'Meisagram' });
}