var User = require('../models/user');
var Image = require('../models/image');
const multer = require('multer');

module.exports = {
    show,
    update,
    destroyProfile

}
function destroyProfile(req, res){
    User.findByIdAndDelete(req.params.id).then(function(){
        res.render('index', {title: "Memesagram"});
    })
}
function update(req, res){
    User.findById(req.params.id, function(err, user){
        console.log("req.body.image: ", req.file.image)
        
        user.avatar = req.file.url;

        // console.log('user: ', user);
        if(req.body.userName.length >= 4){
            user.userName = req.body.userName;
        }
        
        user.save(function(err){
                res.render('meisagram/profile')
            })
    });
    res.redirect('/profile');
}

function show(req, res, next) {
    User.findById(req.params.id, function (err, user) {
        res.render('meisagram/editprofile', { title: 'Meisagram', user });
    })
}