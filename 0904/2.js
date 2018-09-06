function gildong(){
  // return undefined; 생략됨
}

/*
  처음보는 함수가 있습니다.
  이 함수는 메소드로 사용해야 할까요? 생성자로 사용되야 할까요?
*/

var result = gildong();
console.log(result);

function Car(){

}

// var c = Car(){   //대문자로 시작하기 때문에 에러가 난다.//
// }

var c = new Car();
console.log(typeof c);
console.log(c);
