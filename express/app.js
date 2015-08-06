// in app.js
var express = require('express');
var myApp = express();
var bodyParser = require('body-parser');

myApp.use(bodyParser.urlencoded({extended: false}));
myApp.use(bodyParser.json());

myApp.use(express.static('../httpserver/public'));

myApp.get('/', function handleRoot(req, res, next) {
    res.send('Hello World!');
});

myApp.post('/widgets', function handleRoot(req, res, next) {
  console.log('posted some data!');
  console.log(req.body);
  //echo request data to client
  res.json(req.body);
});

myApp.listen(8080);
