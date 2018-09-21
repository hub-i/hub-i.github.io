/*
  JS 자료형은 몇 개 인가요? 7개입니다.
  1개
  8개
  무한대
*/

var a = 10;

console.log(typeof a); // number

console.log(typeof 10); // number

// console.log(10.toFixed(4));

var aa = 10;

console.log(aa.toFixed(4));

var b = "Hi";

console.log(typeof b); // string

console.log(typeof "Hello"); // string

console.log("Hello".length);

/*
  JS 제대로 아는 개발자가 거의 없습니다.
*/

var c = true;

console.log(typeof c); // boolean

var d = {}; // 객체 생성
// new 연산자가 없으므로 설계도 없이도 객체를
// 생성할 수 있다는 뜻이다.

console.log(typeof d); // object

console.log(typeof {x:10,y:20});

var dd = new Object();
// 원한다면 new 연산자로 함수를 생성자로
// 사용하여 새 객체를 만들 수 있습니다.

console.log(typeof dd);

var e = null; // null 도 자료형으로 취급합니다.

console.log(typeof e); // object
// typeof 연산자로 null 체크를 하면 안됩니다.

var f;

console.log(typeof f); // undefined

var fn = function () {
  
};

console.log(typeof fn); // function
// function은 자료형이 아닙니다.
// 개발자 편의를 위해서 function으로 문자열을
// 리턴합니다.

var x = []; // 배열 생성

console.log(typeof x); // object

var s = Symbol();
// 객체의 프로퍼티 키로 유일성을 확보하기 위한
// 지원 기술입니다.

console.log(typeof s); // symbol


























