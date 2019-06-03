var getHTML = require('./http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/uppercase.html'
};

function printReverse (html) {
var newArr = '';
newArr = html.split('').reverse().join('');
console.log(newArr);
}

getHTML(requestOptions, printReverse);