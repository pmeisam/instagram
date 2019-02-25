var Users = require('../models/user');


module.exports = {
    index,
    showPosts

}

function showPosts(req, res, next){
    req.find({photos: photos.path }, function(err, photo){
        res.render('meisagram/feed', {title: "Meisagram"});
    })
}
[0]

function index(req, res, next) {
    console.log('req.query: ' + req.query);
    Users.find(req.query).sort('-1').exec(function(err, users){
        if (err) next(err);
        users = users.sort( (a, b) => {
            if ( b.photos[0]&&  a.photos[0]) {
                console.log('B: ', )
                return a.photos[0].created - b.photos[0].created;
            }
        });
        res.render('meisagram/feed', { title: 'Meisagram' , users });
    })
}
