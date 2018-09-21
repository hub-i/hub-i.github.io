// function Function() {...}
// function Object() {...}

// var x = 11;
// var y = "Tom";
// 
// var obj = {
//   a: 10,
//   print: function () { // 객체의 멤버인 함수는 메소드라고 부른다.
//     console.log('a = ' + this.a);
//   }
// };
// 
// console.log(obj.a);
// obj.print();

/*
  함수를 선언하면 객체 2개가 만들어진다.
  1. 함수객체 Foo
  2. Foo.prototype 히든 프로퍼티가 가리키는 객체
  
  기능적으로 보면, 함수 === 객체 + 로직
*/
function Foo() {
  
}

console.log(Foo.prototype);

console.log(Foo.prototype.constructor === Foo); // true

// Foo.x = 10;
// Foo.y = 20;
// 
// console.log(Foo);






