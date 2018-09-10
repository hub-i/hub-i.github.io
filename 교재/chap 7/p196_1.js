console.log('START');
let i;

var fn = function(){
    console.log(i);
    }
for (i = 1; i <= 3; i++) {
  setTimeout(fn,1000);
}
console.log('END');

console.log(i);
