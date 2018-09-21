/*
  https://medium.com/korbit-engineering/let%EA%B3%BC-const%EB%8A%94-%ED%98%B8%EC%9D%B4%EC%8A%A4%ED%8C%85-%EB%90%A0%EA%B9%8C-72fcf2fac365
  
  Temporal Dead Zone
  var와 let/const 선언에 대한 범위의 차이 중 
  하나는 let/const가 TDZ에 의해 제약을 받는다는 
  것이다.
  
  즉, 변수가 초기화되기 전에 액세스하려고 하면, 
  var처럼 undefined를 반환하지 않고, 
  ReferenceError가 발생한다. 
  이는 코드를 예측가능하고 잠재적 버그를 
  쉽게 찾아낼 수 있도록 한다.
*/

// console.log(x); // throws a ReferenceError
// const x = 'hey';

/*
  위 예제를 보면, let/const선언은 호이스팅을 
  수행하지 않는다고 생각할 수 있다.
  하지만 이는 잘못된 것이며, Hoisting에 관한 
  예제 코드에서 var를 const으로 바꾸면, 
  어떤 일이 발생하는지 살펴본다.
  
  undefined를 반환하는 var와는 달리, 
  초기화되기 전에 액세스할 때 에러가 발생한다.
*/

const x = 'outer scope';

(function() {
  console.log(x);
  // const x = 'inner scope';
}());

/*
  새로운 범위에 진입할 때마다 지정된 범위에 
  속한 모든 let/const바인딩이 지정된 범위 
  내부의 코드가 실행되기 전에 실행된다. 
  (즉, let/const선언이 호이스팅된다.)
  
  어휘적 바인딩이 실행되기 전까지 액세스할 수 
  없는 현상을 TDZ라고 한다.
*/


/*
  우변에서 let/const로 선언된 변수를 
  사용하는 경우, 우변은 변수를 읽으려고 
  시도하지만 초기화 구문이 아직 완전히 
  실행되지 않은 상태이므로, ReferenceError가 
  발생한다.
*/

// const a = f(); // ReferenceError
// const b = 2;
// 
// function f() {
//   return b;
// }

/*
  결론
  let/const선언 변수는 호이스팅되지 않는 것이 
  아니다. 스코프에 진입할 때 변수가 만들어지고 
  TDZ(Temporal Dead Zone)가 생성되지만, 
  코드 실행이 변수가 실제 있는 위치에 도달할 
  때까지 액세스할 수 없는 것이다. 
  let/const변수가 선언된 시점에서 제어흐름은 
  TDZ를 떠난 상태가 되며, 변수를 사용할 수 
  있게 된다.
*/


