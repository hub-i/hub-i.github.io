function Vehicle(){
  this.color = "red";
  this.print = function(){
    console.log("Vehicle # print() called");
  };
}

function Car(){}

Car.prototype.__proto__= Vehicle.prototype;

var car = new Car();
console.log(car);
//console.log(car.color);
//car.print()
