var https = require('https');
var newPrint = [];
function getAndPrintHTML (data) {
    var requestOptions = {
        host: 'sytantris.github.io',
        path: '/http-examples/step2.html'
      };
    https.get(requestOptions, function (response) {
        response.setEncoding('utf8');
        response.on('data', function (data) {
             newPrint.push(data);
          //console.log('Chunk Received. Length:\n', data.length);
        });

        response.on('end', function (){
            console.log(newPrint)
            console.log('Response stream complete')
        })
    })
}

console.log(getAndPrintHTML())