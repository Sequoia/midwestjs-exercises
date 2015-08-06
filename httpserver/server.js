// server.js
var http = require('http');
var url  = require('url');
var serveStatic = require('./serve-static');

var staticPattern = /\/static\/(.*)$/;

var server = http.createServer(function handleRequests(req, res) {
  var path = url.parse(req.url).pathname;
  if(staticPattern.test(path)){
    var assetPath = staticPattern.exec(path)[1];
    serveStatic(assetPath, res);
  }else{
    res.writeHead( 200, {
      'Content-Type': 'text/plain'
    });
    res.end( 'Hello World!' );
  }
});

server.listen(3000, '127.0.0.1', function() {
  console.log('The server is up!');
});
