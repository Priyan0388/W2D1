var https = require('https');
var newPrint = [];
module.exports = function getHTML(options, callback) {
    https.get(options, function (response) {
        response.setEncoding('utf8');
        response.on('data', function (data) {
            newPrint += data;
        });
        response.on('end', function() {
            console.log('Response stream complete.');
            callback(newPrint);
        });

    });
};