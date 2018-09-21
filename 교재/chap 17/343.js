const input = "As I was going to Saint Ives";

// var obj = {};
// var arr = [];
// var regexp = /\./;

// 단어의 길이 4~N인 대상을 찾는다.
var reg = /\w{4,}/ig;

console.log(reg instanceof RegExp); // true

const output = input.replace(reg, '****');
console.log(output);
// As I was **** to **** ****



