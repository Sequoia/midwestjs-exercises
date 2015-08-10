var express = require('express');
var router = express.Router();
var _ = require('lodash');

var widgets = [];
var lastId  = 0;

router.get('/',function getAll(req, res, next) {
  console.log('yo');
  if(widgets.length){
    res.render('all_widgets', {widgets: widgets});
  }else{
    res.redirect('create');
  }
});

router.post('/',function handleRoot(req, res, next) {
  var widget = {
    name : req.body.name,
    id   : ++lastId
  };
  widgets.push(widget);
  res.render('all_widgets', {widgets: widgets});
});

router.get('/create',function getForm(req, res, next) {
  res.render('widget_form');
});

router.get('/:id(\\d+)/', function getOne(req, res, next){
  var widget = _.find(widgets, {id : parseInt(req.params.id)});
  if(widget){
    res.render('widget',widget);
  }else{
    var e = new Error('Could not find widget');
    e.code = 404;
    next(e);
  }
});

module.exports = router;
