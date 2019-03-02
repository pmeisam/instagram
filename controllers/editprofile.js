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
        if (typeof(req.file) === "object"){
            user.avatar = req.file.url;
        }
        if(req.body.userName.length >= 4){
            user.userName = req.body.userName;
            user.adrs = user.userName.replace(' ','');
            User.find({userName: user.userName}, function(){
                if(user.userName === req.body.userName){
                    res.send('The new user name is already taken, please try some other name.');
                }else {
                    user.save(function(err){
                        res.redirect(`/profile/${req.user.adrs}`)
                    })
                }
            })
        }
        
    });
}

function show(req, res, next) {
    User.findById(req.params.id, function (err, user) {
        res.render('meisagram/editprofile', { title: 'Memesagram', user });
    })
}