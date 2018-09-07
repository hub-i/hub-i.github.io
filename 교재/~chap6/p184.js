function add(a,b){
  return a+b;
}
function multiply(a,b){
  return a*b;
}

var a = 18;
var b = 20;
console.log(add(a,b));
console.log('-----------------------');
var nums = [a, b];
console.log(add(nums[0],nums[1]));
// Spread 연산자 : 배열의 요소를 낱개로 쪼개서 처리한다.
console.log(add(...nums));

console.log('-----------------------');
// Rest parameter(나머지 파라미터)
// 할당하지 않고 남은 나머지 파라미터 값들을 모두 모아서

//--- 배열에 담고 그 배열을 변수 args에 할당한다.
function calculator(flag,...args){ //파라미터 자리에 할당하는 것만 Rest연산자
  //첫번째 할당자를 받고, 나머지는 배열로 args에 담는다는 의미
  switch (flag) {
    case '+':
      return add(...args);  //스프레드 연산자 (함수를 호출하는 자리..)
      break;
    case '*':
      return multiply(...args);
      break;
    default:
      return '잘못된 연산입니다.';
  }
}

console.log(calculator('+',2,3,4));
console.log(calculator('*',2,3,4,5));
console.log(calculator('-',2,3,4));
