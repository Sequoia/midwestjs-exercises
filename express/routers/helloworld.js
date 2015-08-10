var express = require('express');
var router = express.Router();

router.get('/',function handleRoot(req, res, next) {
  res.render('hello_world',{
    name : "Sequoia"
  });
});

module.exports = router;
