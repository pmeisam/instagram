var Users = require('../models/user');
var Images = require('../models/image');
const multer = require('multer');

module.exports = {
    show,
    addLike,
    addComment,
    delete: deleteComment
}

function deleteComment(req, res){
    Images.find(req.params.i_id, function(err, image){
        image.comments.id(req.params.c_id).remove();
        res.redirect('/feed');
    })
}

function addComment(req, res) {
    Images.findById(req.params.id, function (err, image){
        Users.findOne({googleId: image.gId}, function(err, user){
            // var photo = user.photos.find(p => p.photo === image.url);
            // console.log("the comment is:", req.body.comment)
            // photo.comments.push({
            //     comment: req.body.comment,
            //     user: req.user.userName
            // });
            image.comments.push({
                comment: req.body.comment,
                user: req.user.userName
            });
            image.save();
            user.save(function(){
                res.redirect('/profile');
            })
        })
    })
}
function addLike(req, res, next) {
    Images.findById(req.params.id, function (err, image) {
        Users.findOne({ googleId: image.gId }, function (err, user) {
            // console.log("user: ", user)
            // console.log('googleId: ', user.googleId);
            // var photo = user.photos.find(p => p.photo === image.url);
            // ----------- I need a if statement here to know if the user has liked before so he can't like no more
            // console.log("email: ", user.email);
            // console.log('including: ', image.likeNo.includes(user.email));
            // console.log('what includes: ', image.likeNo);
            // console.log('user live: ', req.user);
            console.log('email: ', req.user.email)
            if(image.likes.includes(req.user.email)){
                res.redirect('/profile');
            }else {
                // photo.like.push({ email: req.user.email });
                image.likes.push( req.user.email );
                image.save();
                user.save(function () {
                    res.redirect('/profile');
                });
            }
        });
    });
}

function show(req, res, next) {
    console.log('Meisam:    ', req.user.userName);
    req.user.populate('photos', function (err, u) {
        res.render('meisagram/profile', { u: req.user, title: 'Meisagram' });
    })
}

