var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express beginning'});
});

router.get('/lee', function(req,res,next) {
  res.render('lee', { title: 'leezt beginning'});
});

module.exports = router;
