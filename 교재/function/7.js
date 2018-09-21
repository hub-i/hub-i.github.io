var literal = 'hello';
literal.prop = 'xyz';

console.log(literal);
console.log(literal.prop)

var copy = literal;

console.log(copy);
console.log(copy.prop)
// -> undefined

var obj = new String('hello');
obj.prop = 'xyz';

var copy = obj;
console.log(copy.prop);
// ->'xyz'

console.log('--------------');

var MutableString = function(value) {
  this.text = value;
};
 
MutableString.prototype = {
  toString: function() {
    return this.text;
  }
};
 
var x = new MutableString('bar');
 
console.log(x);
// -> object
 
var y = 'foo ' + x;
console.log(y);
// -> foo bar

console.log(typeof 10.0.toString());