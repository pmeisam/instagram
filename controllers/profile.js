var Users = require('../models/user');
var Images = require('../models/image');
const multer = require('multer');

module.exports = {
    show,
    addLike,
    addComment,
    delete: deleteComment,
    destroyPost,
    updatePost
}
function updatePost(req, res){
    Images.findByIdAndUpdate( req.params.id, {caption: req.body.caption}, function(err, image){
        image.save(function(err){
            res.redirect('back');
        })
    })
}
function destroyPost(req, res){
    Images.findById(req.params.i_id, function(err, image){
        image.remove();
        image.save(function(err){
            res.redirect(`/profile/${req.user.adrs}`);
        })
    })
}
function deleteComment(req, res){
    Images.findById(req.params.i_id, function(err, image){
        image.comments.id(req.params.c_id).remove();
        image.save(function(err){
            res.redirect(`/profile/${req.user.adrs}`);
        })
    })
}

function addComment(req, res) {
    Images.findById(req.params.id, function (err, image){
        Users.findOne({googleId: image.gId}, function(err, user){
            image.comments.push({
                comment: req.body.comment,
                user: req.user.userName
            });
            image.save();
            user.save(function(){
                res.redirect(`/profile/${req.user.adrs}`);
            })
        })
    })
}
function addLike(req, res, next) {
    Images.findById(req.params.id, function (err, image) {
        Users.findOne({ googleId: image.gId }, function (err, user) {
            if(image.likes.includes(req.user.email)){
                for( var i = 0; i < image.likes.length; i++){ 
                    if ( image.likes[i] === req.user.email) {
                      image.likes.splice(i, 1); 
                    }
                 }
                image.save();
                res.redirect(`/profile/${req.user.adrs}`);
            }else {
                image.likes.push( req.user.email );
                image.save();
                user.save(function () {
                    res.redirect(`/profile/${req.user.adrs}`);
                });
            }
        });
    });
}

function show(req, res, next) {
    req.user.populate('photos', function (err, user) {
        res.render('meisagram/profile', { user: req.user, title: 'Memesagram' });
    })
}

