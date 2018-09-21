var arr = [4, 10, 7, 100, 25, 34, 21, 79];


console.log(arr.sort((a, b) => a > b)[0]);

console.log(arr.sort((a, b) => a < b)[0]);

var people = [
  {id:30, name:'Brad', age:45},
  {id:20, name:'Tom', age:34},
  {id:40, name:'Iaan', age:64},
  {id:10, name:'Aaron', age:18},
];

console.log(people.sort((a, b) => a.id > b.id));

console.log(people.sort((a, b) => a.age > b.age)[0].name);

console.log(people.sort((a, b) => a.name < b.name));