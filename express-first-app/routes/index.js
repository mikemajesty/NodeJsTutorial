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


router.get('/index/ola',(req,res,next)=>{
    res.render('index',{title:'Form Validation', success: session.success, errors: req.session.erros});
    req.session.errors = null;
});

router.post('/submit/ola',(req,res,next)=>{
    req.check('email','invalid email').isEmail();
    req.check('password','Password is invalid').isLength({min:4}).equals(res.body.confirmpassword);
    
    var erros = req.validationErrors();
    if (errors) {
        req.session.erros = errors;
        req.session.success = false;
    }
    else{
        req.session.success = true;
    }
    res.redirect('/');
});

module.exports = router;
