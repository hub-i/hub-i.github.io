// Error: Cannot find module 'moment-timezone'
// 1. 'moment-timezone' 라는 이름으로 제공하는 노드 내장모듈이
// 존재하지 않는다.
// 2. 써드파티에서 제공하는 기술로써 프로젝트 루트 밑으로
// 존재하는 node_modules 폴더 밑에 설치되지 않았다.
// 설치 방법: npm install 모듈명
const moment = require('moment-timezone');

var now = new Date();

// ReferenceError: document is not defined
// document 라는 예약어로 존재하는 객체는 
// 브라우저 컴파일러가 처리할 때만 존재한다.
// document.write('Hello World!<br />');
// document.write(now+'<br />');
var day = moment().format('YYYY-MM-DD hh:mm:ss');
// document.write(day);

console.log(now);
console.log(day);



