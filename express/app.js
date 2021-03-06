// in app.js
var express = require('express');
var myApp = express();
var bodyParser = require('body-parser');
var helloRouter = require('./routers/helloworld');
var widgetsRouter = require('./routers/widgets');
var auth = require('./middleware/auth');

myApp.set('views', 'templates');
myApp.set('view engine', 'jade');

myApp.use(bodyParser.urlencoded({extended: false}));
myApp.use(bodyParser.json());
myApp.use(auth.router);

myApp.use(express.static('../httpserver/public'));

myApp.use('/', helloRouter);

myApp.use('/widgets', auth.check, widgetsRouter);

myApp.use(function notFound(req, res, next){
  var e = new Error('not found');
  e.code = 404;
  next(e);
});

myApp.use(function defaultErrorHandler(err, req, res, next){
  console.log(err.message);
  res.render('error', {code: err.code, message: err.message});
});

myApp.listen(8080);
