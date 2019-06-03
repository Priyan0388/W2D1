var https = require('https');
var newPrint = [];
function getHTML (options, callback) {
    https.get(options, function (response) {
        response.setEncoding('utf8');
        response.on('end', function() {
            console.log('Response stream complete.');
            console.log(newPrint);
          });
        response.on('data', callback)
        });
  }
  
  function newArr(data) {
    newPrint.push(data);
  }

  function printHTML (html) {
    console.log(html);
  }
  
  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step4.html'
  };

  getHTML(requestOptions, newArr)