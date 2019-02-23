var Insta = require('../models/insta');


module.exports = {
 
    show
}


function show(req, res, next) {
    res.render('meisagram/feed', { title: 'Meisagram' });
}
