// 제너레이터는 연산을 지연시켰다가 
// 필요할 때 수행하게 만들 수 있습니다.
function* abc(){
  yield 'a';
  yield 'b';
  // 특정 조건일 때 제너레이터의 수행을 중단할 수 있다.
  if (true) {
    return;
  }
  yield 'c';
}

const iter = abc();

console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
