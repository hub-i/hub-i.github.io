//Cannot find module 'moment-timezone'
//'moment-timezone'라는 이름으로 제공하는 노드 내장모듈이
//존재하지 않는다.
//써드파티에서 제공하는 기술로써 프로제긑 루트 밑으로
//존재하는 node_modules 폴더밑에 설치되지 않았다.
//설치방법 npm install 모듈명
const moment = require('moment-timezone');

var now = new Date();

//document.write('Hello World!<br />');
//document.wriite(Date.now() + '<br />');
var day = moment().format('YYYY [escaped] YYYY');
//document.write(day);

console.log(now);
console.log(day);
