var Users = require('../models/user');
var Images = require('../models/image');
const multer = require('multer');

module.exports = {
    show,
    addLike,
    addComment,
    delete: deleteComment,
}


function deleteComment(req, res) {
            var params = req.params;
            console.log('image: ', params.i_id)
            console.log("image: ", params.images)
            console.log("image: ", params.likes_id)
            console.log("image: ", params.c_id)
            Images.findById(params.i_id, function (err, image) {
                console.log(image.comments.id(params.c_id).user)
                console.log(req.user.userName)
                console.log(req.user.userName === image.comments.id(params.c_id).user)
                // the if statement isn't working properly
                if (req.user.userName === image.comments.id(params.c_id).user) {
                    image.comments.id(params.c_id).remove();
                    image.save(function (err) {
                        res.redirect('/feed')
                    });
                } else {
                    res.redirect('/feed');
                }
            });
        }

function addComment(req, res) {
            Images.findById(req.params.id, function (err, image) {
                Users.findOne({ googleId: image.gId }, function (err, user) {
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
                    user.save(function () {
                        res.redirect('/feed');
                    })
                })
            })

        }

function show(req, res) {
            res.render('meisagram/likes', { title: 'Memesagram' });
        }

function addLike(req, res) {
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
                    if (image.likes.includes(req.user.email)) {
                        res.redirect('/feed');
                    } else {
                        // photo.like.push({ email: req.user.email });
                        image.likes.push(req.user.email);
                        image.save();
                        user.save(function () {
                            res.redirect('/feed');
                        });
                    }
                });
            });
        }