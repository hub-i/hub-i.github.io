class Square {
  constructor(length = 10) {
    this.length = length;
    // this.area = length * length;
  }
  show(){
    console.log('this.length = ' + this.length);
  }
  get area(){
    return this.length * this.length;
  }
  set area(area){
    this.length = Math.sqrt(area);
  }
}

let s = new Square();
console.log(s);
console.log(s.length);
console.log(s.area); // () 괄호 사용하지 않는다.
s.area = 400; // () 괄호 사용하지 않는다.
console.log(s.length);
console.log(s.area);
