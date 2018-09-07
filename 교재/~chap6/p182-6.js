function foo(){
  setTimeout(function(){
    console.log(this.a);
  }.bind(this),100)
}

// function foo(){
//   console.log(this===foo);
//
//   var fn = function(){
//     console.log(this.a);
//   }
//
//   //fnBind 함수내에 this는 bind를 사용하여 poo로 고정시켰다.
//   var fnBind =fn.bind(this);
//   setTimeout(fnBind,100)
// }

foo.a ='foo.a'
foo.call(foo)
