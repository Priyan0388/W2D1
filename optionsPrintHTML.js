var https = require('https');
var newPrint = [];
function getAndPrintHTML (options) {
    https.get(options, function (response) {
        response.setEncoding('utf8');
        response.on('end', function() {
            console.log('Response stream complete.');
            console.log(newPrint);
          });
        response.on('data', function (data) {
             newPrint.push(data);
          //console.log('Chunk Received. Length:\n', data.length);
        });
    });
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};

getAndPrintHTML(requestOptions)