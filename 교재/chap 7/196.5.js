console.log('START');

let i;

var fn = function (j) {
  console.log(j);
};

for (i = 1; i <= 3; i++) {
  setTimeout(fn, 1000, i);
}

// console.log('i = ' + i);

console.log('END');

// START
// END
// 1
// 2
// 3

















