/*
  Recursive(재귀함수) : 함수 내 로직이 자신 함수를 다시 호출하는 로직
  메소드를 호출할 때마다 메소드내 로직이 사용하는
  데이터를 보존하는 공간은 매번 새롧게 만들어진다.

Tail Call Optimization Recursion

  메소드 내 로직을 처리하기 위해서 사용하는
  메모리 공간의 재활용을 위해서 보존해야 하는
  상태변수를 두지 않는 기술
*/

// function fact(n) {        //factorial 4! 함수의 약자
//  if(n === 1){
//   return 1;
//  }
//  console.log(n*(n-1));
//  return n * fact(n-1);
// }

function fact(n, result) {
    if(n === 1){
     return result;
    }
  return fact(n-1,n*result);
}  mmk

var result1 = fact(5,1);
console.log(result1);
