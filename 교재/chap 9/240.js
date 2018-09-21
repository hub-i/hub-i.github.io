class Car {
  
}

class InsurancePolicy {
  
}

function makeInsurable(o) {
  o.addInsurancePolicy = function(p) {
    this.insurancePolicy = p;
  };
  o.getInsurancePolicy = function() {
    return this.insurancePolicy;
  };
  o.isInsured = function() {
    return !!this.insurancePolicy;
  };
}

makeInsurable(Car);

const car1 = new Car();

// Error, 비 상식적
// car1.addInsurancePolicy(new InsurancePolicy()); // error

makeInsurable(car1);

// 불편
car1.addInsurancePolicy(new InsurancePolicy()); // works

// 믹스인: 다른 클래스의 기능을 car 객체가 이용할 수 
// 있게 해주기 위해서 믹스인 함수를 호출하여
// Car.prototype 객체에 다른 클래스로 만든 객체를
// 사용하는 기능을 동적으로 추가한다.
makeInsurable(Car.prototype);

// 상속으로 해결
const car2 = new Car();

car2.addInsurancePolicy(new InsurancePolicy()); // works




