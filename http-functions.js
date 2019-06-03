var https = require('https');
var newPrint = [];
module.exports = function getHTML(options, callback) {
    https.get(options, function (response) {
        response.setEncoding('utf8');
        response.on('end', function() {
            console.log('Response stream complete.');
            console.log(newPrint);
          });
        response.on('data', callback)
    });
};