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

router.get('/teste/:id',function (req, res, next){
    res.render('teste',{output:req.params.id});
});

router.post('/teste/submit',function (req, res, next) {
    var id = req.body.id;
    res.redirect("/teste/"+id);
});

module.exports = router;
