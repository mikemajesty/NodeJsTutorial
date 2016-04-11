var express = require('express');
var router = express.Router();
var mongo = require('mongodb').MongoClient;
var object = require('mongodb').ObjectID;
var assert = require('assert');

var url = 'mongodb://localhost:27017/test';
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

router.get('/get-data',(req,res,next)=>{
    var resultArray = [];
    mongo.connect(url,(err,db)=>{
        assert.equals(null,err);
        var cursor = db.collection('user-data').find();
        cursor.forEach((doc,err)=>{
            assert.equals(null,err);
            resultArray.push(doc);
        },()=>{
            db.close();
            res.render('index',{items: resultArray});
        });
    });
});

router.post('/insert',(req,res,next)=>{
    var item = {
        title: req.body.title,
        content: req.body.content,
        author: req.body.author
    };
    
    mongo.connect(url, (err,db) =>{
        assert.equals(null,err);
        db.collection('user-data').insertOne(item,(err,result)=>{
            assert.equals(null,err);
                console.log('Item Inserted');
                db.close();
        });
    });
    
    res.redirect('/');
});

router.post('/delete',(req,res,next)=>{
    var id = req.body.id;
    mongo.connect(url, (err,db) =>{
        assert.equals(null,err);
        db.collection('user-data').deleteOne({'_id':object(id)},(err,result)=>{
            assert.equals(null,err);
                console.log('Item deleted');
                db.close();
        });
    });
});

router.post('update',(req,res,next)=>{
    var item = {
        title: req.body.title,
        content: req.body.content,
        author: req.body.author
    };
    
    var id = req.body.id;
    mongo.connect(url, (err,db) =>{
        assert.equals(null,err);
        db.collection('user-data').updateOne({'_id':object(id)},{$set: item},(err,result)=>{
            assert.equals(null,err);
                console.log('Item Update');
                db.close();
        });
    });
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
