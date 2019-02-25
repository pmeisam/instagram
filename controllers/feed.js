var Users = require('../models/user');
var Images = require('../models/image');

module.exports = {
    index,
    showPosts

}

function showPosts(req, res, next){
    req.find({photos: photos.path }, function(err, photo){
        res.render('meisagram/feed', {title: "Meisagram"});
    })
}


function index(req, res, next) {
    // console.log('req.query: ' + req.query);
    // Users.find(req.query).sort('-1').exec(function(err, users){
    //     if (err) next(err);
    //     users = users.sort( (a, b) => {
    //         if ( b.photos[0]&&  a.photos[0]) {
    //             console.log('B: ', )
    //             return a.photos[0].created - b.photos[0].created;
    //         }
    //     });
    //     res.render('meisagram/feed', { title: 'Meisagram' , users });
    // })
    Images.find({},function(err, image){
        if (err) next(err);
        res.render('meisagram/feed', { title: 'Meisagram' , image });
    })
}




// function index(req, res, next) {
//     console.log(req.query)
//     // Make the query object to use with Student.find based up
//     // the user has submitted the search form or now
//     let modelQuery = req.query.name ? {name: new RegExp(req.query.name, 'i')} : {};
//     // Default to sorting by name
//     let sortKey = req.query.sort || 'name';
//     Student.find(modelQuery)
//     .sort(sortKey).exec(function(err, students) {
//       if (err) return next(err);
//       // Passing search values, name & sortKey, for use in the EJS
//       res.render('students/index', {
//         students,
//         user: req.user,
//         name: req.query.name,
//         sortKey
//       });
//     });
//   }