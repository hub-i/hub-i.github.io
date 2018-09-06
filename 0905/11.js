function Vehicle(){
  this.color = "red";
  this.print = function(){
    console.log("Vehicle # print() called");
  };
}
Vehicle.prototype.color ="Black";
Vehicle.prototype.print = function(){
  console.log("Vehicle.prototype # print() called");
};

function Car(){
  //Vehicle();          //
  Vehicle.call(this); //call : Vehicle의 내용을 호출하는것.
  //new 연산자와 같이 함수를 호출했으므로 이경우 Function Context는
  //새로만든 객체이다.
}

//Car.prototype.__proto__= Vehicle.prototype;

var car = new Car();
console.log(car);
console.log(car.color);
car.print()

//Vehicle();
//print();
