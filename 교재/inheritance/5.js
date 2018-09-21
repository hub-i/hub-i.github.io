/*

*/
function Foo() {

}

var f1 = new Foo();
console.log(f1);

var o1 = new Object();
console.log(o1);

console.log(o1.__proto__ === Object.prototype);

Object.prototype.show = function () {
  console.log("Hello World!");
};

o1.show(); // 아버지 객체의 자원을 사용합니다.
f1.show(); // 할아버지 객체의 자원을 사용합니다.







