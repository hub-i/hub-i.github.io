// 정규표현식을 연습하는 사이트
// https://regexr.com/


var beer99 = "99 bottles of beer on the wall. " +
 "take 1 down and pass it around --. " +
 "98 bottles of beer on the wall.";
var matches = beer99.match(/0|1|2|3|4|5|6|7|8|9/g);
console.log(matches);

var matches1 = beer99.match(/[0123456789]/gi);
console.log(matches);
console.log("----------------------------------");
//var match = beer99.match(/[0-9]/g);
var match = beer99.match(/[/-0-9]./g);
console.log(match);
var match = beer99.match(/[/-0-9.]/g);
console.log(match);

//같은 의미이다.~
/*
var matches = beer99.match(/[0-9a-z]/g);
console.log(matches);
*/
/*
/beer[0123456789]/  beer0~beer9
*/

/*
정규표현식이 기호를 다른 의미로 정해서 사용하면
그 기호를 문자열로 찾아달라고 할때 추가적ㅇ니
설정이 필요합니다.
이스케이프 문자 역슬레쉬를 사용하면
정규표현식 설정이 아니라 그냥 문자열로 취급됩니다.
*/
var match = beer99.match(/\./ig);
//.이 의미하는건 공백을 포함한 모든 한글자를 말한다.
//.을 사용하려면 \(역슬래쉬를 사용해야한다.)
console.log(match);
