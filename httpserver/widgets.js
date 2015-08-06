var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/widgets');

mongoose.connection.on('error', function (err) {
    // connection failed
    console.error('Connection error', err);
});

var widgetSchema = new mongoose.Schema({
  name : 'string'
});

var Widget = mongoose.model('Widget', widgetSchema);

function createWidget(data, callback){
  var widget = new Widget(data);
  widget.save(callback);
}

function readWidget(id, callback){
  if(id){ //read 1
    Widget.findById(id,callback);
  }else{ //read all
    Widget.find(callback); 
  }
}

module.exports = {
  create : createWidget,
  get    : readWidget
};
