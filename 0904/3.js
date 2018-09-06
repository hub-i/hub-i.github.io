var obj = {a:10} ;            //권장하는 방법
console.log(obj)

var obj2 = new Object();  //비 권장 방법
console.log(obj2);

// 필요하다면 언제든지 객체의 프로퍼티를 조작할 수 있습니다.
obj.a = 30
obj.b = 20;
console.log(obj)

delete obj.a;
console.log(obj);


function Vehicle(){
//자바스크립의 this는 Function Context (상황에 따라 바뀜)
// 자바의 this는 고정이지만 JS의 this는 함수를
//호출하는 맥락에 따라 변경되므로 주의가 필요하다.
this.color = "red"
// 위 코드에서 동적으로 this가 가리키는
// 새 객체에 프로퍼티 color를 추가하고
// 초기값으로 "red" 문자열을 할당한다.
}
var v = new Vehicle();
//new 연산자로 생성자를 호출할 때 벌어지는 일
//1. 새 객체 {} 생성
// 2. 객체가 필요한 히든 프로퍼티를 추가한다. {_proto_: Vehicle.prototype, color:"red"}
//  3. 생성자 함수를 호춣한다. 이때, Function Context는
//      새 객체 입니다. (this)
//        {_proto_: Vehicle.prototype, color:"red"}
//  4. 생성자가 끝난 후 그 결과인 새 객체를 참조하는 값을
//      변수v에 할당한다.

console.log(v)

console.log(v._proto_===Vehicle.prototype);
//_proto_: 이 히든 프로퍼티는 부모를 가리키는 용도의
// 프로퍼티로써 객체 생성 시 자동으로 추가된다.
// 새 객체는 생성자 함수 vehicle 함수가 가진 prototype 객체가 된다.

// prototype: 이 프로퍼티가 가리키는 객체는 자식객체에게
// 제공하고자 하는 프로퍼티를 부모입장에서 제공하기 위해
// 존재하는 객체로써 모든 일반 함수는 자동으로 이 속성을 가진다.
