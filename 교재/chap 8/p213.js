class Person {
 constructor(name) {
 this.name = name;
 this.id = Person.nextId++;
 }
}
Person.nextId = 0;

const jamie = new Person("Jamie"),
      juliet = new Person("Juliet"),
      peter = new Person("PeterJ"),
      jay = new Person("Jay");

console.log(jamie);
console.log(juliet);
console.log(peter);
console.log(jay);

const arr = [jamie, juliet, peter, jay];
// option 1: direct comparison of ID:
a= arr.find(p => p.id === juliet.id); // returns juliet object
// option 2: using "this" arg:
let b= arr.find(p => p.id === this.id, juliet);
                          // 콜함수에 쓸 this에 juliet을 써라.
console.log(b);
var ret = arr.some(item=>item.name.includes('J'));
console.log(ret);

var ret = arr.every(item=>item.name.includes('J'));
console.log(ret);

console.log('PeterJ'.includes('J'));
