function log(data) {
  console.log(data);
}

const input = "As I was going to Saint Ives";

const re = /\w{3,}/igm; //<옵션>
//insensitive : 대소문자 구분하지 않는다.
//global : 줄끝까지 계속해서 찾는다.
//multi-line : ekdmawnfdptjeh 계속해서 찾는다.


console.log('Blue has a blue house and a blue car'.replace('blue','red'));
//1개만 변경된다.

console.log('Blue has a blue house and a blue car'.replace(/blue/g,'red'));
//한줄끝까지 찾아서 바꾼다.

console.log('Blue has a blue house and a blue car'.replace(/blue/gi,'red'));
//대소문자 구분없이 blue 모두 red로 바꿔라.

//or 조건
//대상을 찾아서 함수의 파라미터 x에 전달하고 함수가 리턴하는
//값을 바꿔치기용으로 사용하라
log('Blue has a blue house and a blue car'
.replace(/blue|house|car/gi,function myFunction(x) {
  return x.toUpperCase;
}));

log('hello'.replace(/h/,'b'));
log('hello'.replace(/h.../,'bbb'));
