// function Function() {...}
// function Object() {...}

/*
  함수는 선언만 하면 컴파일러가 처리하는 시점에 객체가 됩니다. 
  함수를 메모리에 등록하는 과정을 개발자가 별도로 수행할 
  필요가 없습니다.
  즉, 함수는 선언 즉시 객체로 바라보면 됩니다.
  함수는 객체이므로 자신만의 프로퍼티를 가질 수 있습니다.
  함수는 자동으로 히든 프로퍼티 prototype을 가지며 이 속성으로 
  상속용 객체를 자동으로 갖게 됩니다.
*/
function Foo() {
  
}

Foo.x = 100; // 개발자가 직접 동적으로 x 프로퍼티를 추가합니다.

console.log(Foo.x);

console.log(Foo.prototype);






