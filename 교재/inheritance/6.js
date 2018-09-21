/*
  모든 함수가 가져야 할 공통 자원은
  Function.prototype이 가리키는 객체에 배치하는 것이 좋다.
*/
function Foo() {

}

console.log(Foo.__proto__ === Function.prototype);

console.log(Object.__proto__ === Function.prototype);

Function.prototype.say = function () {
  console.log("Hi World!");
};

Foo.say();
Object.say();



