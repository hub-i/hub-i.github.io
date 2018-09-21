//이미 만들어져있는 비동기 쓰레드방식을 이용하는것

function sum(start, end) {
  let result =0;
  for (var i = start; i<=end ; i++) {
  result += i;
}
return result;
}

//사용자가 처리시간에 기다리는 동안 "기다리는중~" 이라는 메세지를 띄우는것
console.log('START');
let oldTime = Date.now();

//시간이 오래 걸리는 것은 다른 일꾼에게 던지는것~
let value = sum(1,2000000000);//시간이 길어지면 Block Operation에 걸린다.
console.log('value = ' + value);

let newTime = Date.now();
console.log('Elapsed Time = ' + (newTime - oldTime));

//쓰레드가 한개밖에 없기때문에 위에 로직을 다 완료되야 실행할수 있다.
console.log('긴급히 처리해야 하는 로직');
