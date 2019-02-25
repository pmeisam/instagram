var User = require('../models/user');

module.exports = {
    index,
    new: newPost,
    delete: deletePost,
    show
}
function show(req, res, next){

}

function deletePost(req, res, next){


}

function newPost(req, res, next){


}

function index(req, res, next){
    res.render('index');
}