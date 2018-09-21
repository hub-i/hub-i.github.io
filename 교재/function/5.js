var a = "10";
var b = "10";
var c = "20";
var d = new String("10");

console.log(a == b); // true
console.log(a == c); // false
console.log(a == d); // true!

console.log("------------");

console.log(a === b); // true
console.log(a === d); // false!

console.log("------------");

/*
  비교연산자 2가지
*/

console.log(a === b);
console.log(a === c);

console.log("------------");

// == 비교연산자는 숫자를 문자열로 캐스팅한 후 비교합니다.
console.log(10 == "10");
console.log(10 === "10");