

function add() {
  console.log(this === global);
  return 100;
}

console.log(add());
console.log(global.hasOwnProperty('add'));

console.log('-----------------');

var obj = {
  add: function () {
    console.log(this === obj);
    return 100;
  }
};

console.log(obj.add());
console.log(obj.hasOwnProperty('add'));
