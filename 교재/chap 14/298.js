// Callback's Hell: 콜백함수를 중첩해서 사용하면
// 처리순서를 예측하기 어려운 난독증에 빠지는 현상
console.log(1);
setTimeout(function() {
  console.log(2);
  setTimeout(function() {
    console.log(3);
    setTimeout(function() {
      console.log(4);
    }, 0);
    console.log(5);
  }, 0);
  console.log(6);
}, 0);
console.log(7);

// 출력되는 순서를 미리 예측해 보세요!
// 1 7 2 6 3 5 4


