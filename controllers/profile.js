var User = require('../models/user');
const multer = require('multer');

module.exports = {
    show    
}

function show(req, res, next) {
    console.log(req.user);
    User.find( req.user , function(err, u){
        res.render('meisagram/profile', { 
            title: 'Meisagram', 
            u: req.user
        });
    });
}

