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
         }, (seconds-i)*1000);
    }
 });
}


let promise = countdown(10);
console.log(promise instanceof Promise);

promise.then(function (result) {
  console.log('result = ' + result);
}).catch(function (error)){
  console.log(error.message);
});
