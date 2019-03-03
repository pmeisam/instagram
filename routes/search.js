var express = require('express');
var router = express.Router();
var searchCtrl = require('../controllers/search');

router.get('', searchCtrl.show);

module.exports = router;
