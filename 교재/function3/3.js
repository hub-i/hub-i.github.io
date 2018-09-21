/*
  ECMAScript == JavaScript == ES6(버전)
  현재 주력 브라우저가 지원하는 버전은 ES5 입니다.
  하지만, 노드, 앵귤러, Vue.js, React, Ionic, Electron... 기술들은
  ES6,7,8 버전의 문법을 사용하여 개발합니다.
  
  ES6로 개발한 코드를 브라우저에게 주면 안 돌아갑니다.
  왜냐하면 브라우저는 ES5까지만 제대로 지원하기 때문이죠.
  
  ES6 작성 코드 ==트랜스파일러==> ES5 버전의 코드
  코드를 다운그레이드해서 배포해야 합니다.
  
  대표적인 Transpiler로 Babel을 사용합니다.
*/

// ; 생략하면 컴파일러가 자동으로 넣어 준다.

var obj = {a:10}

console.log(obj.a)








