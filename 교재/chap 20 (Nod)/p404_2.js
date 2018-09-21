var add;

console.log(add);

add = function add() {
  return 10;
};
console.log(add(2,3));

//----(위)개발자 A ---------

//---(아래)개발자 B -----------
add = function () {
  return 20;
};
console.log(add());

//---------------B---------------

//--------아래 개발자 C ---------------
//A개발자는 10을 리턴한다고 주장하고.
//B개발자는 20을 리턴한다고 주장합니다.
//C 개발자는 A 개발자가 만든 함수를 사용하고 싶어요.
//어떻게 가능할까요?
console.log(add());
