var User = require('../models/user');
var Image = require('../models/image');
const multer = require('multer');

module.exports = {
    show,
    update,
    destroyProfile

}
function destroyProfile(req, res) {
    User.findByIdAndDelete(req.params.id).then(function () {
        res.render('index', { title: "Memesagram" });
    })
}
function update(req, res) {
    User.findById(req.params.id, function (err, user) {
        if (typeof (req.file) === "object") {
            user.avatar = req.file.url;
        }
        if (req.body.userName.length >= 3) {
            User.findOne({ userName: req.body.userName }, function (err, usr) {
                if (usr) {
                    console.log('there was a user');
                    console.log('user: ', usr);
                    res.send('The user name is already taken, please choose another one.')
                    // alert('The user name is already taken, please choose another one.')
                    // res.redirect('back');
                } else if(!usr) {
                    console.log('******************************we are in the findone function now')
                    console.log('user found is: ', user);
                    user.userName = req.body.userName;
                    user.adrs = user.userName.replace(' ', '');
                    user.save(()=> res.redirect(`/profile/${req.user.adrs}`))
                    
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