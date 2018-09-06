/*

*/
function Foo(){

}

var f1 = new Foo();
console.log(f1)

var o1 = new Object();
console.log(o1); //Object{} 에서 Object가 생략됨. 브라우저마다 틀리다.

console.log(o1.__proto__===Object.prototype);

Object.prototype.show = function(){
  console.log("Hellow World!")
};
o1.show();  //나한테 없어도 아버지객체의 프로퍼티를 이용할수 있다.
f1.show();  //나한테 없어도 할아버지객체의 프로퍼티를 이용할수 있다.
