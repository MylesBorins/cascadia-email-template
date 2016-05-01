var fs = require('fs');
var path = require('path');

var _ = require('lodash');

var CSV = require('comma-separated-values');

var csvPath = process.env['CSV_PATH'] || process.argv[2] || path.join(__dirname, 'example.csv');
var day = process.env['CONF_DAY'] || process.argv[3] || 'fun';
var curator = process.env['CURATOR'] || process.argv[4] || 'Myles';
var link = process.env['ACCEPTANCE_LINK'] || process.argv[5] || 'http://cascadiajs.com';

var data = fs.readFileSync(csvPath, 'utf8');

var csv = new CSV(data, {header: true});

var parsed = csv.parse();

module.exports = _.map(parsed, (item) => {
  return {
    curator: curator,
    day: day,
    title: item['Talk'],
    speaker: item['Speaker'],
    email: item['Email'],
    link: link
  };
});
