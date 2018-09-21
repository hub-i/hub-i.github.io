console.log(this === global); // false
console.log(this); // {} 빈 객체
console.log(this === exports); // true
// exports: 노드가 제공하는 예약어로 객체입니다.
// 이 파일에서 다른 파일로 제공하고 싶은 자원을 
// 직접 선택하여 노출하고 싶을 때 등록하는 객체입니다.
// 노드는 파일단위로 코드를 격리하기 위해서
// 파일 전체 코드를 IIFE 식으로 감싸서 처리합니다.
// 따라서, 다른 파일에 제공하고 싶은 자원이 있다면
// exports 객체에 해당 자원을 추가하는 방식으로 설정합니다.

console.log(1);

// IIFE: 함수 스코프를 사용하여 코드를 외부와 격리한다.
// 자바 클래스의 격리 개념과 비슷합니다.
(function(outlet) { // 개발자 A
  var x = 1000;
  var a = 10;
  console.log(2, a);
  
  // export: 제공하고 싶은 자원을 직접 선택하여
  // 노출해야 합니다.
  outlet.A = { // A 문자열은 패키지 역할을 수행
    a
  };
}(this));

console.log(3);

(function(outlet) { // 개발자 B
  var a = 20;
  console.log(4, a);
  
  outlet.B = { // B 문자열은 패키지 역할을 수행
    a
  };
}(this));

console.log(5);

console.log('--------------');

// 1. 함수스코프를 사용하여 격리한다.
// 2. 함수 안쪽에 자원은 기본적으로 외부에서
// 접근 할 수 없으므로(private) 외부에 제공하고 싶은
// 자원(public)을 직접 노출시켜야 한다. (export)
// 3. 노출 시 프로퍼티 이름이 충돌되면 의미가
// 없어지므로 노출할 때 고유의 네임스페이스 역할의 
// 프로퍼티 'A', 'B'를 도입한다.

// 개발자 C가 개발자 A의 a 변수를 사용하고 싶어요.
console.log('this.A.a =', this.A.a);

// 개발자 C가 개발자 B의 a 변수를 사용하고 싶어요.
console.log('this.B.a =', this.B.a);


