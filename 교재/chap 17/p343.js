const input = "As I was going to Saint Ives";

//var obj = {}
//var arr = []
//var regexp = /\./;

let reg =/\w{4,}/ig; // w(단어)의 길이가 4~N인 대상을 찾는다.

console.log(reg);
console.log(reg instanceof RegExp);

const output = input.replace(/\w{4,}/ig, '****');
// "As I was ****
// to **** ****"

 console.log(output);
