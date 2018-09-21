console.log('START');


// 1회용
// setTimeout(function (val) {
//   console.log('val = ' + val);
// }, 5 * 1000, 100);


// 반복수행: 인터럽트 당할 때 까지
// clearInterval(intervalId) 호출하면 작업을 취소한다.
let cnt = 0;
const intervalId = setInterval(function (val) {
  cnt++;
  console.log('val = ' + val);

  if (cnt >= 3) {
    clearInterval(intervalId);
  }
  
}, 5 * 1000, 100);


// const start = new Date();
// 
// let i = 0;
// 
// const intervalId = setInterval(function() {
//   let now = new Date();
// 
//   if (now.getMinutes() !== start.getMinutes() || ++i > 10)
//     return clearInterval(intervalId);
// 
//   console.log(`${i}: ${now}`);
// }, 5 * 1000);






