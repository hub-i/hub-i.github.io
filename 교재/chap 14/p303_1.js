// 노드가 제공하는 requiire 함수를 사용하면
// 다른 ~.js 파일이나 node_modules 폴더밑에 설치한
// 프로그램 또는 노드가 기본적으로 제공하는 내장 모듈이
// 제공하는 객체를 획득할 수 있습니다.
const EventEmitter = require('events').EventEmitter;

function Counter() {
  this.start = function(){
    //'start'라는 문자열을 이벤트에미터에게 보내어
    //해당 문자열과 연동되는 콜백함수를 호출하게 만듭니다.
    this.emit('start'); //this(counter)로 치환해서 생각하면 된다.
  //counter.emit('start')
  }
}

Counter.prototype.__proto__= EventEmitter.prototype;
//상속을 의미하는것
//카운터 프로토타입의 객체는 이벤트에미터의 프로토타입이다.


//console.log(Object.keys(EventEmitter.prototype));

let counter = new Counter();
//console.log(counter);

//on(eventName, listener)
//on 함수로 이벤트에미터에게 누군가가 나중에
//'start'라는 문자열로 신호를 보내거든 같이 전달하는
//콜백함수를 호출해달라고 미리 신청합니다.
counter.on('start',function(){
  console.log('START');
});
counter.start();

//구글에 node eventemitter on 검색해서 확인
//https://nodejs.org/api/events.html#events_eventemitter_listenercount_emitter_eventname
