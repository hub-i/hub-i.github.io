
function Vehicle() {
  // this.color = "Red";
  // this.print = function () {
  //   console.log("Vehicle # print() called");
  // };
}

console.log("#1 >>", Vehicle.prototype);

Vehicle.prototype.color = "Red";
Vehicle.prototype.print = function () {
  console.log("Vehicle.prototype # print() called");
};

console.log("#2 >>", Vehicle.prototype);

function Car() {}

Car.prototype.__proto__ = Vehicle.prototype;

var car = new Car();
console.log(car);
console.log(car.color); // 사용가능
car.print(); // 사용가능








