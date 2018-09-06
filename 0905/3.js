/*
  모든 객체는 히든 프로퍼티__proto__를 갖는다.
  __proto__프로퍼티로 부모객체를 참조한다.
*/
function Foo(name){
  this.name = name||'anonyomous'; //앞에 값이 의미가 있으면 뒤의 값을 할당.
//   var a=20;
// return 10;
}
console.log(Foo());

console.log("---------------------------");
var f1 = new Foo('F1');
console.log(f1)

var f2 = new Foo();
console.log(f2);

console.log(f1.__proto__);
console.log(f2.__proto__);

console.log("---------------------------");

console.log(f1.__proto__=== Foo.prototype);
console.log(f2.__proto__=== Foo.prototype);

var obj = {a:100};
console.log(obj.a);
console.log(obj.b);
