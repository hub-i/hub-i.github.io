const Promise = require('bluebird');
// fs 모듈내 함수는 이제 모두 프라미스 객체를 리턴합니다.
const fs = Promise.promisifyAll(require('fs'));

let dir = __dirname + '/';
console.log('START');

let result1;
let result2;
let result3;

fs.readFileAsync(dir + 'a.txt')
  .then(function(dataA) {
    result1 = dataA;
    return fs.readFileAsync(dir + 'b.txt');
  })
  .then(function(dataB) {
    result2 = dataB;
    return fs.readFileAsync(dir + 'c.txt');
  })
  .then(function(dataC) {
    result3 = dataC;
    let data = result1 + result2 + result3;
    fs.writeFileAsync(dir + 'd.txt', data);
    console.log('DONE');
  })
  .catch(function(err) {
    if (err) console.error(err);
  });




// fs.readFile(dir + 'a.txt', function(err, dataA) {
//   if (err) console.error(err);
// 
//   fs.readFile(dir + 'b.txt', function(err, dataB) {
//     if (err) console.error(err);
// 
//     fs.readFile(dir + 'c.txt', function(err, dataC) {
//       if (err) console.error(err);
// 
//       setTimeout(function() {
//         let data = dataA + dataB + dataC;
// 
//         fs.writeFile(dir + 'd.txt', data, function(err) {
//           if (err) console.error(err);
//           console.log('DONE');
//         });
// 
//       }, 3 * 1000);
// 
//     });
//   });
// });











