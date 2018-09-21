/*
                          일반 함수               화살표 함수
this 처리방식              Function Context       Closest Scope(Auto Fixed)
arguments 지원여부         지원                   미지원
new 문법 가능여부          가능                   불가능
prototype 객체 보유여부    보유                   미보유
*/

// 노드에서는 전역 스코프의 this가 모듈시스템을 위한 
// exports 객체를 가리킨다.
// console.log(this === exports);

// 실제로 익스포트 되는 객체는 module.exports이고, 
// exports는 이를 참조하는 변수다.
// module.exports는 빈 객체로 초기화되어 있으므로 
// exports에 프로퍼티를 추가할 수 있다. 
// 하지만 exports에 새로운 객체를 할당하면 
// module.exports 와는 상관 없는 변수가 되어버리므로 
// 모듈이 동작하지 않는다.
// 따라서, 객체를 통째로 exports에 할당하고 싶다면
// module.exports에 할당해야 한다.
console.log(exports === module.exports);

// 이 아규먼트 객체는 노드가 파일을 IIFE 로 감싼 후
// 그 함수에게 전달되는 파라미터를 보관하는 객체다.
console.log(Reflect.ownKeys(arguments));



this.a = 'this.a';

// 객체는 스코프가 없다.
var obj = {
  a: 'obj.a',
  show: function () {
    console.log(this === obj);
    // arguments: 받은 파라미터들을 보관하는 객체
    console.log(typeof arguments, arguments);
    console.log(this.a);
  },
  print: () => {
    // 이 지점에서 가장 가까운 스코프는 글로벌 스코프다.
    console.log(this === exports);
    console.log(this.a);
  }
};

// obj.show(10, 20);
// obj.print(20, 20);




