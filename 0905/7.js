/*
  모든 함수의 부모는 Function.prototype이 가리키는
  프로토타입 객체입니다.
*/
function Foo(){

}
// var x = new Function();
// console.log(x);
//이렇게 사용하면 안된다.

console.log(Function.__proto__===Function.prototype);
console.log(Object.__proto__===Function.prototype);
console.log(Foo.__proto__===Function.prototype);
console.log(function(){}.__proto__===Function.prototype);

//console.log(Function.prototype.__proto__===Function.prototype);
