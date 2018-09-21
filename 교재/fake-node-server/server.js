// 노드 내장모듈 http를 불러온다.
const http = require('http');

//request : 브라우저 == 데이터 ==> 서버
//respose : 브라우저 <== 데이터 == 서버
const server = http.createServer(function(req, res) { //funcltion이하 콜백함수를 불러온다.

 res.setHeader('Content-Type', 'application/json'); // Content-Type : 데이터의 종류 JSON 포맷의 문자열이다.
 res.setHeader('Access-Control-Allow-Origin', '*'); // *누구라도 데이터를 요청하면 사용할수있다.

 //모든사람 * , 회원정보일때는 브라우저에서 통제, 유료회원정보는 첫 요청부터막는다.
 // HTTP 규약에 따른 통신 설정정보
 // Access-Control-Allow-Origin : URL의 도메인을 요청
 // CORS : 브라우저가 데이터의 저작권을 보호하기 위하여
 //도메인이 상이할 때 자동으로 데이터 요청을 차단하는 기능


//서버가 브라우저에게 전달하고 싶은 데이터를
//respose 객체에 추가하면 전달이 된다.
 res.end(JSON.stringify({
 platform: process.platform,
 nodeVersion: process.version,
 uptime: Math.round(process.uptime()),
 }));
});
const port = 7070;

//포트 번호를 주고 서버를 기동한다.
server.listen(port, function() {
  //서버 기동이 정상이면 호출되는 콜백함수다.
 console.log(`Ajax server started on port ${port}`);
});
//babel-node server.js
//server.js 파일 내 코드가 노드 컴파일러가 이해하지 못하는
//최신 문법인 경우, 바벨을 통해 문법을 다운그레이하고
//그 다음 노드를 사용하여 코드를 처리하는 명령입니다.
