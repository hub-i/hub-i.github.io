/*
  js 자료형은 몇 개 인가요?
  1개
  8개
  무한대
*/

var a =10;
console.log(typeof a); //number
console.log(typeof "hello");
var c = true
console.log(typeof c)
//new 연산자가 없으므로 설계도 없이도 객체를
//생성할 수 있다는 뜻이다.
console.log(typeof {})
var f;
console.log(typeof f) //undefined
var fn = function(){}
console.log(typeof fn)
var s = Symbol()
console.log(typeof s)
//객체의 프로퍼티 키로 유일성을 회복하기 위한
//지원기술입니다.

console.log("Hello".length);
var aa = new Object();
console.log(typeof aa)
console.log(typeof [])
console.log(typeof null)
console.log(typeof 10.5)
