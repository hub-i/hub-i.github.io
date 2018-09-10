/*
  IIFE (Immediately Invoked Function Expression)
  함수표현식 : 결국 익명함수라는 이야기다.
*/

'use strict';
//개발자가 스스로 컴파일러에게 엄격한 방식으로
//코즈를 검증하라고  요청한다.

var a = 10;
b=20; //bad (b라는 함수는 글로벌 함수가 된다.)
//b는 전역 객체에 의한 프로퍼티이다.

console.log(b);
console.log(global.b);

(function functionname(){
  //함수가 호출없이 바로 실행하겠다.
  console.log('Hi');
})();

//자동함수 iife : 변수, 함수를 외부와 격리하여 사용하고 싶을때
//IIFE 식을 사용합니다.
(function() {
  'use strict';
  console.log('By')
}());

const message = (function() {
     const secret = "I'm a secret!";
     return `The secret is ${secret.length} characters long.`;
    })();
     console.log(message);


const f = (function() {
     let count = 0;
     return function() {//returen function increment() 로 사용해도 똑같다.
       return `I have been called ${++count} time(s).`;
     }
    })();

     f(); // "I have been called 1 time(s)."
     f(); // "I have been called 2 time(s)."
     //...

     console.log(f());
     console.log(f());

     /*--------자바의 경우------------------------
     class counter {
       private int count =0;

       public String increment(){
         return ++count + "time(s).";
       }
     }

     Counter counter = new Counter();
     System.out.println(counter.incremetn());
     System.out.println(counter.incremetn());
     *///--(위의 Case와 똑같다)-----------------------
