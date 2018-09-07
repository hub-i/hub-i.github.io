const n1 = 0; //관습적으로 false
console.log(typeof !n1); //느낌표는 boolean형으로 바꾼다는 것
const b1 = !!n1;
//2번째 !는 원값이 1일때 true가 되어야
//부정연산자를 2번사용하여 원값의 의미를 보존한다.
console.log(!!n1); //false
console.log(!n1); //true
console.log(n1); //0

//관습적으로 처리하는 방식을 컴파일러가 받아들였다.
//number>> 0:       false, 나머지 : true가
//string>> "":      false
//null,undefined >> false
//object>>          true
//{};   >>          true //객체가 undefined면 false

var n2= "";
var n2= {};


if (n2) {
  console.log("참입니다..");

} else {
  console.log("거짓입니다.");
}
