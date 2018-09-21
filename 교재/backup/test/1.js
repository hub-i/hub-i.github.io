var x = 'outer scope';

(function() {
  console.log(x); // undefined
  var x = 'inner scope';
}());

// 위는 아래와 같은 의미를 가진다.

// var x = 'outer scope';
// (function() {
//   var x;
//   console.log(x); // undefined
//   x = 'inner scope';
// }());









