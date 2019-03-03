const User = require('../models/user');

module.exports = {
    show,
}

function show( req, res ){
    var modelQuery = req.query.username ? {userName: new RegExp(req.query.username, 'i')} : {};
    let sortKey = req.query.sort || 'userName';
    User.find(modelQuery, function(err, searchData){
            console.log('req.quer: ', searchData)
            if(err) return next(err);
            res.render('meisagram/search', {
                title: "Memesagram", 
                userName: req.query.username,
                searchData,
                sortKey, 
                user: req.user
            });
        })
}