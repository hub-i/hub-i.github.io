/*

*/

function Vehicle(){
  this.run = function(){
    console.log('Vehicle is running!');
  };
}

Vehicle.prototype.move = function(){
  console.log('Vehicle is moving!');
};

function Car(){
  this.doors = 4;
}

//Car.prototype.__proto__= Vehicle.prototype; //move만 실행됨
//console.log(Car.prototype); //{__proto__: Vehicle.prototype}
console.log("---------------------------------------------");

Car.prototype.__proto__= new Vehicle();
console.log('#1>>',Car.prototype);
console.log(Car.prototype);//{run : function,__proto__:Vehicle.prototype}
var car = new Car()
console.log(car); // {doors:4,__proto__:Car.prototype }
car.move(); //할아버지인 Vehicle.prototype의 자원을 사용한다.
car.run();

/*
  move 자원을 사용하기 위해서 처리된 과정
  1. car가 가리키는 객체에 해당 자원이 있는지 찾아본다. 실패!
  2. car.__proto__가 가리키는 부모객체에
    해당자원이 있는지 찾아본다. 실패!
  3. Car.prototype.__proto__가 가리키는 부모객체
    Vehicle.prototype 객체에 해당 자원이 있는지 찾아본다.
    성공! 찾았으니 사용한다.

    만약, 여기 Vehicle.prototype 객체에서도 찾지 못했다면
    Vehicle.prototype.__proto__===Object.prototype 이므로
    한단계 위로 올라가서 Object.prototype이 가리키는 객체에서
    해당 자원이 있는지 찾아본다. 이렇게 부모 객체로 거슬러 올라가는
    반복작업은 Object.prototype.__proto__===null을 만날때까지
    수행됩니다. null을 만났다는 것은 더 이상 위로 부모가 없다는
    뜻입니다.
*/
