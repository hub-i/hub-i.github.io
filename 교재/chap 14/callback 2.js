//JS는 자바처럼 쓰레드가 없기때문에 비동기함수를 준것.
//  1. JS나 노드가 제공하는 비동기 함수를 선택하여 사용합니다.
//  2. 또는, 브라우저가 제공하는 웹워커 기술을 사용하여
//    시간이 오래 걸리는 로직을 위임할 수도 있습니다.
//  3. 또는, 시간이 오래걸리는 블록연산을 다른 서버API에게 요청하여
//    그 결과를 받아서 사용할 수도 있습니다.


// #1 가정 (노드가 제공하는 비동기함수라고 가정하고 흉내를 내보자)
//비동기방식의 함수 sumAsync
function sumAsync(start, end, cb) {  //콜백함수를 받아서
  setTimeout(function() {
    //setTimeout 함수에 전달한 cb함수가 기동하기 위한
    //2가지 조건
    // 1. 시간이 지나야한다.
    // 2. 개발자가 사용할 수잇는 단 하나의 메인 스레드가
    //    다른 일을 하고 있지 않는 IDLE 상태여야 한다.

      let result = 0;
       for (var i = start; i<=end ; i++) {
       result += i;
     }
     //return result; //동기방식은 return을 하고 비동기방식은 return을 할수 없다.
    cb(result);
                              //안에서 처리
  },0);
}

//동기방식의 함수 sumSync
// function sumSync(start, end) {// sum 함수를 잘라다가 asyncSum에 집어넣는다.
//   let result =0;
//   for (var i = start; i<=end ; i++) {
//   result += i;
// }
// return result;
// }

console.log('START');
let oldTime = Date.now();

//기다리면 안되 let value = sum(1,2000000000);//시간이 길어지면 Block Operation에 걸린다.
//sumAsync(1,2000000000);
sumAsync(1,2000000000,function(result) {
  console.log('value = ' + result);
});//다른 함수를 전달하는다는것은 로직을 전달한다는것..


let newTime = Date.now();
console.log('Elapsed Time = ' + (newTime - oldTime));


//쓰레드가 한개밖에 없기때문에 위에 로직을 다 완료되야 실행할수 있다.
console.log('긴급히 처리해야 하는 로직');


// 여기서부터는 코드가 없으므로 메인스레드는 IDLE(대기) 상태가된다.
// 일을 시킬때까지 그냥 논다.

//2번의 경우 이해 : while문 상태가 실행되는 동안 콜백함수가 실행되지 않는다.
// while (Date.now() < newTime + 20000){     //newTime(메인쓰레드)가 20초동안 계속 돌아간다..
//
// }
