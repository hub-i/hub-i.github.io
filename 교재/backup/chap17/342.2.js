function log(data) {
  console.log(data);
}

log('hello world'.replace('world', 'javascript'));
// hello javascript

// 1개만 변경된다.
log('Blue has a blue house and a blue car'.replace('blue', 'red'));
// Blue has a red house and a blue car

log('Blue has a blue house and a blue car'.replace(/blue/g, 'red'));
// Blue has a red house and a red car

log('Blue has a blue house and a blue car'.replace(/blue/gi, 'red'));
// red has a red house and a red car





// OR 조건
// 대상을 찾아서 함수의 파라미터 x에 전달하고 함수가 리턴하는
// 값을 바꿔치기용으로 사용하라.
log('Blue has a blue house and a blue car'
  .replace(/blue|house|car/gi, function myFunction(x) {
    return x.toUpperCase();
  }));
  
// BLUE has a BLUE HOUSE and a BLUE CAR  
  

log('hello'.replace(/h/, 'b'));
// bello


log('hello'.replace(/h../, 'bbb'));
// bbblo








