//스탑워치처럼 만드는것

const EventEmitter = require('events').EventEmitter;
//EventEmitter는 이벤트의 중개자이다..

function Counter(max) {
  this.start = function(){
    this.emit('start');
    let self = this;  //이 지점에 this를 변수에 담아 기억하겟다.

    let intervalId = setInterval(function() {
      max--;
      self.emit('count',max);
      if(max<=0){   //카운트가 0이되면 반복작업을 중단합니다.
        console.log("카운트종료");
        clearInterval(intervalId);
      }
    },1000);


  }
}

Counter.prototype.__proto__= EventEmitter.prototype;
//-----------------------------------------------------------------

//Counter 함수를 작성한 개발자와
//그 함수를 사용하는 개발자가 다르다.
let counter = new Counter(5);

counter.on('start',function(){
  console.log('START');
});

counter.on('count',function(val){
  console.log('val = ' + val);
});
counter.start();
