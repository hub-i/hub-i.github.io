function foo(){
   var fn =() => console.log(this.a);
   //화살표 함수는 this가 Lexical scope를 기준으로
   //가장 가까운 this에 자동으로 bind되고 고정된다.

  // var fn = (function(){
  //   console.log(this.a);
  // }).bind(this);
  
  //화살표 함수 = 일반함수.bind(가장 가까운 this)
   setTimeout(fn,100)
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
