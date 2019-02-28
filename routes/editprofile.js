var express = require('express');
var router = express.Router();
var editCtrl = require('../controllers/editprofile');
const multer = require('multer');
const cloudinary = require("cloudinary");
const cloudinaryStorage = require("multer-storage-cloudinary");
const storage = cloudinaryStorage({
  cloudinary: cloudinary,
  folder: "userprofiles",
  allowedFormats: ["jpg", "jpeg", "png"],
  transformation: [{ width: 600, height: 600, crop: "limit" }]
});
const parser = multer({ storage: storage });


router.get('/:id', isLoggedIn, editCtrl.show);
router.put("/update/:id", parser.single("image"), editCtrl.update);
router.delete('/deleteuser/:id', isLoggedIn, editCtrl.destroyProfile);



function isLoggedIn(req, res, next) {
    if ( req.isAuthenticated() ) return next();
    res.redirect('/auth/google');
  }
  
module.exports = router;