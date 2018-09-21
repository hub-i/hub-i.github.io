console.log('START');

// ReferenceError: i is not defined
// var fn = function () {
//   console.log(i);
// };

for (let i = 1; i <= 3; i++) {
  setTimeout(function () {
    console.log(i);
  }, 1000);
}

// console.log('i = ' + i);

console.log('END');

// START
// END
// 1
// 2
// 3

















