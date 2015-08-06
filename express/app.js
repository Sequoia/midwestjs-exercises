// in app.js
var express = require('express');
var myApp = express();

myApp.use(express.static('../httpserver/public'));

myApp.get('/', function handleRoot(req, res, next) {
    res.send('Hello World!');
});

myApp.listen(8080);
