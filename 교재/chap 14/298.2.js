// fs: 노드가 내장하여 제공하는 파일처리 모듈
const fs = require('fs');

console.log(__dirname); 
// E:\java\git\work\book\chap14

let dir = __dirname + '/';

console.log('START');
// 노드가 제공하는 대부분의 함수는 비동기 함수고
// 동기함수는 sync라는 단어가 붙는다.
fs.readFile(dir + 'a.txt', function(err, dataA) {
  if (err) console.error(err);
  
  fs.readFile(dir + 'b.txt', function(err, dataB) {
    if (err) console.error(err);
    
    fs.readFile(dir + 'c.txt', function(err, dataC) {
      if (err) console.error(err);
      
      setTimeout(function() {
        let data = dataA + dataB + dataC;
        
        fs.writeFile(dir + 'd.txt', data, function(err) {
          if (err) console.error(err);
          console.log('DONE');
        });
        
      }, 3 * 1000);
      
    });
  });
});

