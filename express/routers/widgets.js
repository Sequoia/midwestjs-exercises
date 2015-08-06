var express = require('express');
var router = express.Router();

router.post('/',function handleRoot(req, res, next) {
  console.log('posted some data!');
  console.log(req.body);
  //echo request data to client
  res.json(req.body);
});

module.exports = router;
