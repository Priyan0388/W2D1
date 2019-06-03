var https = require('https');

function getAndPrintHTMLChunks (data) {
    var requestOptions = {
        host: 'sytantris.github.io',
        path: '/http-examples/step1.html'
    };
    https.get(requestOptions, function (response) {
        response.setEncoding('utf8');
        response.on('data', function (data) {
          console.log('Chunk Received. Length:\n', data);
        });

        response.on('end', function (){
            console.log('Response stream complete')
        })
    })
}

console.log(getAndPrintHTMLChunks())