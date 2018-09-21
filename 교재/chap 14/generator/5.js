// 호출자가 제너레이터의 처리 단계마다 
// 정보를 전달하여 처리방식을 변경할 수 있습니다.
function* interrogate(){
  const name = yield 'What is your name?';
  const color = yield 'What is your favorite color?';
  return `${name}'s favorite color is ${color}.`;
}

const iter = interrogate();

var cycle = iter.next();
console.log(cycle.value);

cycle = iter.next('Aaron');
console.log(cycle.value);

cycle = iter.next('blue');
console.log(cycle.value);
