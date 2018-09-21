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
    
    var existMeat = true;
    // var existMeat = false;
    
    if (!existMeat) {
      // throw new Error('고기가 떨어져서 장사 끝냅니다.');
      cb(new Error('고기가 떨어져서 장사 끝냅니다.'), null);
    } else {
      // 빈 자리가 나면 손님이 준 연락방법을 사용한다.
      cb(null, '손님 빈자리 났어요!');
    }
  }, 0);
}

console.log('START');

function visitCafe(cb) {
  asyncFunctionProvided(cb);
}

// 연락방법을 정의한 로직
var fn = function(error, message) {
  if (error) {
    console.log('카페주인: ' + error.message);
    console.log('대신 김밥천국으로 간다.');
    return;
  }
  console.log('카페주인: ' + message);
  console.log('카페를 들어가서 식사를 한다.');
};

// 연락방법을 건네 주면서 빈 자리가 있으면 
// 연락해 달라고 부탁하고 다른 볼일을 보러 간다.
visitCafe(fn);

console.log('서점에 들러서 책을 고르고 구매한다.');

