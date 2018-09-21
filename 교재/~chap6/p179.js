//함수 선언식
function add(){
    return 1;
}

// 함수 표현식
var adder = function(){ //익명함수
  return 2;
}

console.log(adder());
console.log(typeof add);
console.log(typeof adder);
