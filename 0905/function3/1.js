console.log(Reflect.ownKeys(Function.prototype));
console.log(Reflect.ownKeys(Object.prototype));

function foo(){
  console.log(this == global);
  //global은 노드 컴파일러가 처리하면 사용할 수 잇는
  //전역객체를 가리키는 예약어 이다.
  return 100;
}
console.log(foo());
console.log(foo.call());
console.log("-----------------");
//함수 내부에서 사용하는 this를 함수 호출시
//변경하고 싶다면 call방법으로 함수를 호출합니다.
console.log(foo.call({}));
console.log("-----------------");





// function add(a,b){
//   return a+b;
// }
//console.log(add(2,3));

// function add(obj){
//   return obj.a+obj.b;
// }
// console.log(add({a:2,b:3}));

//call, apply, bind

var obj = {
  a:2,
  b:3,
  add: function(){
    return this.a+this.b;
  }
};
console.log(obj.add());
var adder = obj.add;
console.log(adder()); //NaN
console.log(adder(a=10,b=20));
