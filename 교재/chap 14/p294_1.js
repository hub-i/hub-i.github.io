console.log('START');

const start = new Date();
let i=0;

//1회용 : setTimeout
// setTimeout(function (val) {
//   console.log('val= ' + val);
// },5*1000, 100);

//반복수행 setInterval: 인터럽트 당할때 까지
// setInterval(function (val) {
//   console.log('val= ' + val);
// },5*1000, 100);

// setInterval(function (val) {
//   console.log('val= ' + val);
//   clearInterval(intervalId);
//   },5*1000,100);



  const intervalId = setInterval(function () {
    let now = new Date();

    if(now.getMinutes() !== start.getMinutes()||++i>10)
    return clearInterval(intervalId);

    console.log(`${i}:${now}`);
  }, 5*1000);



// const intervalId = setInterval(function() {
//  let now = new Date();
//  if(now.getMinutes() !== start.getMinutes() || ++i>10)
//  return clearInterval(intervalId);
//  console.log(`${i}: ${now}`);
// }, 5*1000);
