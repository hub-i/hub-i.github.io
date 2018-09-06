var obj ={
  a:2,b:3,add:function(){
    console.log(this===obj);
    return this.a + this.b;
  }
};

console.log(obj.add());
var adder = obj.add;
console.log(adder(a=10,b=20));
console.log("---------------");
console.log(adder.call(obj));
