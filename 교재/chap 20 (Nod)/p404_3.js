//노드 컴파일러는 js파일을 만들면 자동으로 iife로 감싼후에
//this로 exports를 준다.(노드가 모듈을 완성했다.)

console.log(this===global);
console.log(this);
console.log(this===exports);
//exports : 노드가 제공하는 예약어로 객체입니다.
//iife(탭) 누르면 자동생성 : 격리로직을 만들겠다.
//자바의 패키지 === 다른언어의 NameSpace

console.log(1);
// IIFE : 함수 스코프를 사용하여 코드를 외부와 격리한다.
(function(outlet) {       //함수스코프를 사용하여 코드를 외부와 격리!
  var x = 1000;
  var a = 10;
  console.log(2,a);

  //export : 제공하고 싶은 자원을 직접 선택하여 노출해야한다.
  outlet.A={              //A문자열이 패키지 역할을 수행
    a,x
  };

}(this));

console.log(3);


(function(outlet) {
  var a = 20;
  console.log(2,a);
  outlet.B={              //B 문자열이 패키지 역할을 수행
    a
  };

}(this));
console.log("--------------------------------");

//개발자 C가 A의 a변수를 사용하고 싶어요
console.log(this.A.x);
//개발자 C가 B의 a변수를 사용하고 싶어요

console.log(this.B.a);

console.log(this);


// 1. 함수스코프를 사용하여 격리한다.
// 2. 함수 안쪽에 자원은 기본적으로 외부에서
//    접근 할수 없으므로 외부에 제공하고 싶은
//    자원을 직접 노출시킨다.(export)
// 3. 노출시 프로퍼티 이름이 충돌되면 의미가
//    없으지므로 노출할 때 고유의 네임스페이스 프로퍼티를
//    추가한다.
