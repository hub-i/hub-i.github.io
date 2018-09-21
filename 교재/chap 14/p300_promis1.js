/*
  콜백의 헬을 해결하기 위한 시도!
  여러 레벨의 들여쓰기로 인한 난독증을 해결하기 위해서
  프라미스를 사용하면 들여쓰기 레벨이 1레벨로 축소됩니다.
*/

/*----------------(promis문법)------------------------------------
let pormis = new Promise(function (resolve,reject) {    //문법이니 외워라

  if (true) {
    //로직처리성공
    resolve('처리결과');
  } else {
    //로직처리 실패 (에러발생)
    reject('실패 사유');
  }
});
//promise.then().catch.finally();//문법전체를 외워야함
promise.then(function(result){     //성공 콜백

}).catch(function(error){         //실패 콜백

}).finally(function() {           //최후의 항상 작동하는 콜백

});
//--------------------(여기까지 외워야함)---------------------------*/

function countdown(seconds) {
    //프라미스 객체가 생성되면 즉시 리턴됩니다.
     return new Promise(function(resolve, reject) {
       for(let i=seconds; i>=0; i--) {

         setTimeout(function(){
           if(i>0) {
             console.log(i + '...');
           }
           else {
             console.log("Go!");
             resolve(console.log("GO!"));
         }, (seconds - i)*1000);
    }
 });
}

//함수가 작업결과 대신 작업 결과를 알려주겠다는
//프라미스(약속) 객체를 즉시 리턴하므로 대기 현상이 발생하지 않습니다.

let promise = countdown(10);
console.log(promise instanceof Promise);

promise.then(function (result) {
  console.log('result = ' + result);
}).catch(function (error)){
  console.log(error.message);
});
