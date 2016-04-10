var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express',condition: false});
});

router.get('/users',function(req, res, next){
    res.send('response with user');
});
 
router.get('/users/detail',function(req, res, next){
    res.send('response with user Detail');
});

module.exports = router;
