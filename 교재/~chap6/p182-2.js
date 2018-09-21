//console.log(global);

global.a = 'global.a'

function foo(){
  console.log(this===global, this===foo, this.a);
  console.log(this.a);
}

foo.a ='foo.a';
// #1
foo();

// #2
foo.call(foo);

// #3
var obj = {
   a: 'obj.a값',
   foo : function(){
     console.log(this===global, this===foo,this.a);
   }
};

obj.foo();

// #4
function Car(){
  this.color ='Red';
}
var car= new Car();
console.log(car);
console.log(car.color);
