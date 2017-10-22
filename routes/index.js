var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log("came here");
  res.render('index',{asdf:"ASFD"});
});

module.exports = router;
