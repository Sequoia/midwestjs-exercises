// server.js
var http = require('http');

var server = http.createServer(function handleRequests(req, res) {
  res.writeHead( 200, {
    'Content-Type': 'text/plain'
  });
  res.end( 'Hello World!' );
});

server.listen(3000, '127.0.0.1', function() {
  console.log('The server is up!');
});
