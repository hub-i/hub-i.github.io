/*
  Hoisting : 글로벌 스코프의 함수 선언식은 컴파일 전에 재 배치됩니다.
*/
console.log(add(4,3))
//console.log(add())  //non
console.log(add(7,2,3))

/*
함수의 호출은 함수명만으로 진행됩니다. 파라미터는 아무런
영향을 주지 않습니다.
글로벌 스코프의 함수는 컴파일 전에 재 배치됩니다.
*/

function add(a,b){
  console.log(a)
  console.log(b)
  return a*b
}
