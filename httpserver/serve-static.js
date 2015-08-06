var fs = require('fs');
var path = require('path');
var mime = require('mime');

var basePath = './public';

module.exports = function(assetPath, res){
  var filepath = path.join(basePath,assetPath);
  fs.readFile(filepath,function(err, data){
    if(err){
      res.statusCode = 404;
      res.statusMessage = "Not found";
      res.end("Not Found :(");
      return;
    }else{
      console.log('serving file: ' + filepath);
      var cType = mime.lookup(filepath);
      res.writeHead(200,{
        'Content-Type': cType
      });
      res.end(data);
    }
  });
};
