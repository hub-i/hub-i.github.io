// undefined 상태이므로 함수로써 사용할 수 없습니다.
console.log(add());

// 선언부만 호이스팅 됩니다.
var add  = function () {
  return 10;
};

console.log(add());

var add  = function () {
  return 20;
};

console.log(add());





