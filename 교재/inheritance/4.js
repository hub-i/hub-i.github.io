/*
  f1 객체의 부모는 Foo.prototype 이 가리키는 
  객체입니다.
  f1 객체의 부모의 부모는 Object.prototype 이 가리키는 
  객체입니다.
*/
function Foo() {

}

var f1 = new Foo();
console.log(f1);
console.log(f1.__proto__ === Foo.prototype);

console.log(Foo.prototype.__proto__ === Object.prototype);
console.log(f1.__proto__.__proto__ === Object.prototype);

// Object.prototype 객체의 부모는 존재하지 않으므로
// 이 객체가 자바스크립트에서 모든 객체의 부모 객체가 된다.
console.log(Object.prototype.__proto__ === null);

// 만약에 여러분이 모든 객체가 공통으로 가져야 할
// 변수, 메소드가 있다면 이런 자원은 
// Object.prototype 이 가리키는 객체에 추가하면 된다.
// 그러면 자식 객체들은 부모의 자원을 상속으로 
// 사용할 수 있으므로 Object.prototype이 가리키는
// 객체에 존재하는 자원을 이용할 수 있다.











