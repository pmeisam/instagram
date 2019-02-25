var express = require('express');
var router = express.Router();
var uploadCtrl = require('../controllers/upload');
const multer = require('multer');
const cloudinary = require("cloudinary");
const cloudinaryStorage = require("multer-storage-cloudinary");
const storage = cloudinaryStorage({
  cloudinary: cloudinary,
  folder: "demo",
  allowedFormats: ["jpg", "jpeg", "png"],
  transformation: [{ width: 600, height: 600, crop: "limit" }]
});
const parser = multer({ storage: storage });

router.get('/', isLoggedIn, uploadCtrl.show);
router.post('/', parser.single("image"), uploadCtrl.create);

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect('/auth/google');
}

module.exports = router;