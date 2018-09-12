// function log(data) {
//   console.log(data);
// }
console.log('Blue has a blue house and a blue car'.replace('blue','red'));
//1개만 변경된다.

console.log('Blue has a blue house and a blue car'.replace(/blue/g,'red'));
//한줄끝까지 찾아서 바꾼다.

console.log('Blue has a blue house and a blue car'.replace(/blue/gi,'red'));
//대소문자 구분없이 blue 모두 red로 바꿔라.
