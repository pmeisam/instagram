var User = require('../models/user');
const multer = require('multer');

module.exports = {
    show
    
}

function show(req, res, next) {
    User.find(req.query, function(err, user){
        console.log(user)
        res.render('meisagram/search', { title: 'Meisagram', user});

    })
}