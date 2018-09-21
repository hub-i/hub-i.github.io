/*
  동기 방식의 코딩
  시간이 오래 걸리는 로직을 동기 방식으로 작성하면
  사용자는 마치 프로그램이 멈춘것처럼 느끼게 되므로
  나쁘다. 이런 경우 비 동기 방식의 코딩으로 변경해야 한다.
*/

console.log('START');

// Block Operation: 코드가 멈춰보일 정도로 시간이
// 많이 소비되는 로직 처리
function visitCafe() {
  var oldTime = Date.now();
  while (Date.now() < oldTime + 2000) { // 2초 지연
    // 손님이 꽉 차서 빈자리가 없다.
    // 손님의 빈 자리가 있는지 여부에 대한 문의를 
    // 빈자리가 날 때까지 답변을 하지 않는다.
  }
  return true; // 2초 후 리턴
}

// 빈 자리가 있는지 물어본다.
// 빈 자리가 있다면(true) 식사를 할 것이다.
var empty = visitCafe(); 
// 2초 후에나 결과를 받음 = 2초 동안 아래 코드를 
// 수행할 수 없다는 뜻이다.

if (empty) {
  console.log('카페를 들어가서 식사를 한다.');
}

console.log('서점에 들러서 책을 고르고 구매한다.');