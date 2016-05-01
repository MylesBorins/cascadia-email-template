var fs =require('fs');
var path = require('path');

var _ = require('lodash');
var open = require('open');

var template = require('./template');

var data = require('./data');

_.each(data, function (item) {
  var body = template(item);
  var link = `mailto:${item.email}?cc=info@cascadiajs.com&subject=${item.title}&body=${body}`;
  open(link);
});
