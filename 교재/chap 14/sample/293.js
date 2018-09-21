/*
  비 동기 방식의 코딩
  1. Call-back
  2. Promise
  3. Generator
*/

function asyncFunctionProvided(cb) {
  setTimeout(function () {
    var oldTime = Date.now();
    while (Date.now() < oldTime + 2000) {
      // 손님이 꽉 차서 빈자리가 없다.
    }
    // 빈 자리가 나면 손님이 준 연락방법을 사용한다.
    cb('손님 빈자리 났어요!');
  }, 0);
}

console.log('START');

function visitCafe(cb) {
  // 비 동기 함수를 사용하면 마치
  // 병렬 스레드에게 일을 시키는 듯한 효과를 얻는다.
  asyncFunctionProvided(cb);
}

// 연락방법을 정의한 로직
var fn = function(message) {
  console.log('카페주인: ' + message);
  console.log('카페를 들어가서 식사를 한다.');
};

// var empty = visitCafe(); 

// 연락방법을 건네 주면서 빈 자리가 있으면 
// 연락해 달라고 부탁하고 다른 볼일을 보러 간다.
visitCafe(fn);

console.log('서점에 들러서 책을 고르고 구매한다.');

