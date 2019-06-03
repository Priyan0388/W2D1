var https = require('https');
var newPrint = '';

function getHTML (options, callback) {
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
  }

  function printHTML (html) {
    console.log(html);
  }  
  function newArr(data) {
    newPrint.push(data);
  }
  
  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step4.html'
  };

  getHTML(requestOptions, printHTML)