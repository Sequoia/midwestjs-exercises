var express = require('express');
var router = express.Router();

router.get('/',function handleRoot(req, res, next) {
    res.send('Hello World!');
});

module.exports = router;
