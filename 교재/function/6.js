/*
  https://stackoverflow.com/questions/51185/are-javascript-strings-immutable-do-i-need-a-string-builder-in-javascript
*/
function StringBuilder() {
  this._array = [];
  this._index = 0;
}

StringBuilder.prototype.append = function(str) {
  this._array[this._index] = str;
  this._index++;
}

StringBuilder.prototype.toString = function() {
  return this._array.join('');
}

var txt = "";
for (var i = 0; i < 10; i++) {
  txt += i;
}
console.log(txt);

var str = new StringBuilder();
for (var i = 0; i < 10; i++) {
  str.append(i);
}
console.log(str.toString());