var User = require('../models/user');
const multer = require('multer');

module.exports = {
    show,
    search

}
function search(req, res, next) {
    // var userName = req.query.userName;
    
    // let modelQuery = req.query.userName ? {userName: new RegExp(req.query.userName, 'i')} : {};
    // if (!userName) res.redirect('/search');
    // console.log('search data ', searchData);
    // console.log(userName)
    // User.find(modelQuery, function (err, users) {
    //     console.log(users)
    //     res.redirect('/search', 
    //     {
    //         users
    //     });

    // })
}

function show(req, res, next) {
    User.find({}, function (err, user) {
        res.render('meisagram/search', { title: 'Meisagram', user });
    })
}