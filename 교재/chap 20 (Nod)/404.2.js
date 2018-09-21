// Hoisting
var add;
var add;

console.log(add); // undefined

// TypeError: add is not a function
// console.log(add()); 

add  = function () {
  return 10;
};

console.log(add()); // 10

// 위 개발자 A 코드영역

//------------5000라인-----------------
// 다른 개발자가 작성한 함수명을 덮어쓰게 될 
// 가능성이 있습니다. 협업 시 글로벌 스코프에서 
// 고유한 자원명을 유지하는 것은 매우 힘든 일 입니다.

// 아래 개발자 B 코드영역

add  = function () {
  return 20;
};

console.log(add()); // 20

//-------------------------------------

// 아래 개발자 C 코드영역

// A개발자는 10을 리턴한다고 주장하고
// B개발자는 20을 리턴한다고 주장합니다.
// C개발자는 A개발자가 만든 함수를 사용하고 싶은데 
// 어떻게 가능할까요?

console.log(add()); // 20

