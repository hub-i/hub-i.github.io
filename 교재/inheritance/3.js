// var obj = {a:100};
// 
// console.log(obj.a);
// console.log(obj.b); // undefined

/*
  일반적으로 모든 객체는 히든 프로퍼티 __proto__ 를 갖는다.
  __proto__ 프로퍼티로 부모 객체를 참조한다.
*/
function Foo(name) {
  this.name = name || 'anonyomous';
}

var f1 = new Foo('F1');
var f2 = new Foo();

console.log(f1);
console.log(f2);
console.log(f1.__proto__ === Foo.prototype);
console.log(f2.__proto__ === Foo.prototype);




