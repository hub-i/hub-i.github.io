const bruce = {
   name: "Bruce"
  };

const madeline = {
   name: "Madeline"
  };

// this function isn't associated with any object, yet
// it's using 'this'!
function greet() {
 return `Hello, I'm ${this.name}!`;
}

greet(); // "Hello, I'm !" - 'this' not bound
greet.call(bruce); // "Hello, I'm Bruce!" - 'this' bound to 'bruce'
greet.call(madeline); // "Hello, I'm Madeline!" - 'this' bound to 'madeline'

console.log(greet());
console.log(greet.call(bruce));
console.log(greet.call(madeline));

function update(birthYear, occupation) {
 this.birthYear = birthYear;
 this.occupation = occupation;
}
console.log('---------------(call 함수)--------------');

update.call(bruce, 1949, 'singer');
update.call(madeline, 1942, 'actress');
console.log(bruce);
console.log(madeline);
console.log('-----------------(apply)------------');

update.apply(madeline, [1918, "writer"]);
update.apply(bruce, [1955, "actor"]); //배열로 주려면 apply로 짤라내서 전달한다.
 // apply 함수가 배열을 낱개로 잘라서 update 함수를
 //호출하면서 파라미터로 전달한다.

 console.log(bruce);
 console.log(madeline);

 const arr = [2, 3, -5, 15, 7];
Math.min.apply(null, arr); // -5
Math.max.apply(null, arr); // 15
console.log(Math.min.apply(null, arr));
//null 부분은 this의 역할하는데 필요없기 때문에 null을 넣었다.
console.log(Math.max.apply(null, arr));
console.log(Math.max(...arr));

const newBruce = [1940, "martial artist"];
update.call(bruce, ...newBruce); // equivalent to apply(bruce, newBruce)
Math.min(...arr); // -5
Math.max(...arr); // 15
