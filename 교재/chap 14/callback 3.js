
function sumAsync(start, end, cb) {
  setTimeout(function() {
      let result = 0;
       for (var i = start; i<=end ; i++) {
       result += i;
     }

     let existError = true;
     if (Math.random()<0.5) {
       existError = true;
     }
     if (existError) {
       throw new Error('모든 코드는 비정상이 될 가능성이 있다.')
     } else {
       cb(result);
     }
  },0);
}


console.log('START');
let oldTime = Date.now();

try {
  //비동기 함수는 try 구문으로 에러를 잡을 수 없다.
  //왜냐하면, 메인 스레드가 비동기 함수를 호출하고
  //바로 다음 줄 코드를 처리하기 위해서 내려간다.
  //비동기 함수는 아직 제대로 코드를 수행하기도 전이므로
  //에러가 발생할 틈이 없고 따라서 비동기 함수는
  //try 구문으로 에러를 잡을 수 없다.
  sumAsync(1,2000000000,function(result) {
    console.log('value = ' + result);
  });
} catch (e) {
  console.log('에러 대응 코드 : ' + e.message)
} finally {

}

let newTime = Date.now();
console.log('Elapsed Time = ' + (newTime - oldTime));

console.log('긴급히 처리해야 하는 로직');


// 여기서부터는 코드가 없으므로 메인스레드는 IDLE(대기) 상태가된다.
// 일을 시킬때까지 그냥 논다.

// while (Date.now() < newTime + 20000){     //newTime(메인쓰레드)가 20초동안 계속 돌아간다..
//
// }
