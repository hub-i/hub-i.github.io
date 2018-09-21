const fs = require('fs');

let data = 'hello from Node!';

let dir = __dirname + '/';

fs.writeFile(dir + 'hello.txt', data, function(err) {
  if (err) return console.log('Error writing to file.');
  console.log('DONE.');
});