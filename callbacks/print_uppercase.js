var getHTML = require('./http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/uppercase.html'
};

function printUpperCase (html) {
var newArr = '';
newArr = html.toUpperCase();
console.log(newArr);
}

getHTML(requestOptions, printUpperCase);