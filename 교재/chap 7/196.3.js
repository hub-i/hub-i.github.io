console.log('START');

var fn = function () {
  console.log(i);
};

for (var i = 1; i <= 3; i++) {
  setTimeout(fn, 1000);
}

// console.log('i = ', i);

console.log('END');

// START
// END
// 4
// 4
// 4

















