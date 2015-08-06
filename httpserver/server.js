// server.js
var http = require('http');
var url  = require('url');
var serveStatic = require('./serve-static');
var widgets = require('./widgets');
var qs = require('querystring');

var staticPattern = /\/static\/(.*)$/;
var widgetPattern = /\/widgets\/(.*)$/;

var server = http.createServer(function handleRequests(req, res) {
  var path = url.parse(req.url).pathname;
  if(staticPattern.test(path)){
    var assetPath = staticPattern.exec(path)[1];
    serveStatic(assetPath, res);
  }
  else if(widgetPattern.test(path)){
    var widgetId = widgetPattern.exec(path)[1];
    //create
    if(req.method === 'POST'){
      var body = '';
      req.on('data',function(data){
        body += data;
      });
      req.on('end',function(){
        widgets.create(qs.parse(body),writeJsonResponse);
      });
    }
    //read
    else{
      widgets.get(widgetId,writeJsonResponse);
    }
  }
  else{
    res.writeHead( 200, {
      'Content-Type': 'text/plain'
    });
    res.end( 'Hello World!' );
  }

  function writeJsonResponse(err, result){
    if(err){
      res.statusCode = 500;
      res.end(JSON.stringify({error: err.message}));
    }else{
      res.writeHead( 200, {'Content-Type':'application/json'});
      res.end(JSON.stringify(result));
    }
  }
});

server.listen(3000, '127.0.0.1', function() {
  console.log('The server is up!');
});
