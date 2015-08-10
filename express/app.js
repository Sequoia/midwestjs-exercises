// in app.js
var express = require('express');
var myApp = express();
var bodyParser = require('body-parser');
var helloRouter = require('./routers/helloworld');
var widgetsRouter = require('./routers/widgets');

myApp.set('views', 'templates');
myApp.set('view engine', 'jade');

myApp.use(bodyParser.urlencoded({extended: false}));
myApp.use(bodyParser.json());

myApp.use(express.static('../httpserver/public'));

myApp.use('/', helloRouter);

myApp.use('/widgets', widgetsRouter);

myApp.listen(8080);
