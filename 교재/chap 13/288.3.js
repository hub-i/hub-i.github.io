/*
  Tail Call Optimization Recursion
  메소드 내 로직을 처리하기 위해서 사용하는
  메모리 공간의 재활용을 위해서 보존해야 하는
  상태변수를 두지 않는 기술
*/

// 4! = 4 * 3 * 2 * 1
// function fact(n) {
//   if (n === 1) {
//     return 1;
//   }
//   return n * fact(n - 1);
// }

function fact(n) {
  var result = 1;
  for (var i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

var result1 = fact(4);
console.log(result1);







