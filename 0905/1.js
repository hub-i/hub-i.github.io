//__proto__는 상속할때 쓰이는 객체이다.

// function Function(){}  //예약어이기때문에 이렇게 쓰면 안된다.
// function Object(){}

/*
  - 함수는 선언만 하면 컴파일러가 처리하여 객체가 됩니다. 함수를 메모리에
    등록하는 과정을 개발자가 수행할 필요가 없습니다.
  - 함수는 선언 즉시 객체로 보면된다..
  - 함수는 자동으로 히든 프로퍼티 prototype을 가지며 이 속성으로
    상속용 객체를 자동으로 갖게 됩니다.

*/
var x=11;
var y="Tom"
var z=12
console.log(x+z+y);


var obj ={
  a:10,               //a 가 (프로퍼티)key , 10은 값(value)
  print:function(){   //객체의 멤버인 함수는 메소드라고 부른다.
    console.log('a=' + this.a);
  }}
console.log(obj.a);
obj.print();


/*
  함수를 선언하면 객체 2개가 만들어진다.
  1. 함수객체 Foo
  2. Foo.prototype 히든 프로퍼티가 가리키는 객체
  }
  기능적으로 보면, 함수 ===객체 + 로직
*/
function Foo(){
  }

Foo.x = 100;
Foo.y = 200;
console.log(Foo);
console.log(Foo.x,Foo.y);
console.log(Foo.prototype);
console.log(Foo.prototype.constructor);
console.log(Foo.prototype.constructor === Foo); //true
