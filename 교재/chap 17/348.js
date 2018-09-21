const beer99 = "99. bottles of beer on the wall " +
  "take 1 down and pass it around -- " +
  "98. bottles of beer on the wall! /";

// const match = beer99.match(/[0-9a-z]/ig);

/*
  정규표현식이 기호를 다른 의미로 정해서 사용하면
  그 기호를 문자열로 찾아달라고 할때 추가적인
  설정이 필요합니다.
  이스케이프 문자 역슬래쉬를 사용하면 
  정규표현식 설정이 아니라 그냥 문자열로 취급됩니다.
*/

// const match = beer99.match(/\//ig);

// . 을 사용하여 임의의 글자 한 글자라는 뜻으로 사용한다.
// const match = beer99.match(/\./ig);

// const match = beer99.match(/-/ig);

// const match = beer99.match(/-|0|1|2|3/ig);

// const match = beer99.match(/[\-0-3]/ig);

// const match = beer99.match(/[\-0-9a-z.]/ig);

// [안에 점] : 문자열 점
// /안에 점/ : 임의의 한글자
const match = beer99.match(/[.]/ig);

console.log(match);
















