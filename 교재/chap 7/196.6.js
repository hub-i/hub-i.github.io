// var는 function-scoped이고, 
// let, const는 block-scoped입니다.
// var는 글로벌 스코프, 함수 스코프 기준으로 hoisting 되고
// let, const는 블록 스코프 기준으로 hoisting 됩니다.

console.log('START');

for (var i = 1; i <= 3; i++) {
  setTimeout((function() {
    var j = i;
    return function () {
      console.log(j);
    };
  }()), 1000);
}

console.log('i = ' + i);

console.log('END');

// START
// END
// 1
// 2
// 3

















