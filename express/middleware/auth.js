var express = require('express');
var router = express.Router();
var session = require('express-session');
var _ = require('lodash');

var users = [
  {id: 1, name : "bob", pass: "foo"},
  {id: 2, name : "jim", pass: "bar"},
];

router.use(session({ secret: 'keyboard cat', cookie: { maxage: 60000 }}));

router.get('/login',function(req,res){
  res.render('login');
});

router.post('/login', function (req, res, next){
  var user = _.find(users,{name: req.body.name, pass: req.body.pass});
  console.log(req.body);
  if(user){
    req.session.userid = user.id;
    res.send('success! You are logged in');
  }else{
    res.send('bad creds try again');
  }
});

router.get('/logout',function(req,res){
  req.session.destroy();
  res.send('logged out');
});

function checkAuth(req, res, next){
  if(!req.session.userid){
    console.error('bad auths!!');
    var e = new Error('need to log in');
    e.code = 403;
    next(e);
  }else{
    next();
  }
}

module.exports = {
  router : router,
  check  : checkAuth
};

