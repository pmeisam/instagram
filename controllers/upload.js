var Insta = require('../models/insta');
const multer = require('multer');

module.exports = {
    show,
    create
}

const storage = multer.diskStorage({
    destination: './public/uploads',
    filename: function ( req, file, cb ) {
        //req.body is empty...
        //How could I get the new_file_name property sent from client here?
        cb( null, 'image' + '-' + Date.now()+'.png' );
    }
});

const upload = multer({
    storage: storage,
}).single('myImage');


function create(req, res) {
    upload(req, res, (err) => {
        if (err) {
            res.render('/upload', {
                msg: err
            });
        } else {
            console.log(req.file);
            res.send(`${req.file.path}`)
        }
    })
}






function show(req, res, next) {
    res.render('meisagram/upload', { title: 'Meisagram' })
}



