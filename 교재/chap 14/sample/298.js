const fs = require('fs');

console.log('START');

let path = __dirname + '/';

fs.readFile(path + 'a.txt', function(err, dataA) {
  
  if (err) console.error(err);
  
  fs.readFile(path + 'b.txt', function(err, dataB) {
    
    if (err) console.error(err);
    
    fs.readFile(path + 'c.txt', function(err, dataC) {
      
      if (err) console.error(err);
      
      setTimeout(function() {
        fs.writeFile(path + 'd.txt', dataA + dataB + dataC, function(err) {
          if (err) console.error(err);
          
          console.log('DONE');
        });
      }, 5 * 1000);
      
    });
    
  });
  
});