/*
  자바스크립트에는 class 개념이 없습니다. 함수만 존재합니다.
*/

function car() { 
  return 100; 
}
var ret = car();
console.log(ret);

// function Car() { 
//   this.color = 'Red'; 
// }
class Car {
  constructor(){
    this.color = 'Red'; 
  }
}
var c = new Car();
console.log(c);

/*
  ECMA6 에서부터 class 라고 하는 문법을 사용할 수 있습니다.
  class 문법은 생성자 함수 작성 문법입니다.
  하지만, 여전히 자바스크립트에는 class 개념이 없습니다.
*/






