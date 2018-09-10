var arr = [4,10,7,100,25,34,21,89];
//가장 작은 숫자를 출력하세요.
// arr.sort(function(a,b){
//   return a>b;
// });
console.log(arr.sort((a,b)=>a>b)[0]);
//console.log(arr[0]);

//가장 큰 숫자를 출력하세요.
console.log(arr.sort((a,b)=>a<b)[0]);
//console.log(arr[arr.length-1]);

var people = [
  {id:30, name:'Brad', age:45 },
  {id:20, name:'Tom', age:34 },
  {id:40, name:'Iaan', age:64 },
  {id:10, name:'Aaron', age:18 }
];

people.sort();
//id 값으로 오름차순 정렬을 하세요.
people.sort((a,b) => a.id > b.id);
console.log(people);
//나이가 가장 어린 사람의 이름을 출력하세요.
people.sort((a,b) => a.age > b.age);
console.log(people[0]);
//name 값으로 내림차순 정렬하세요.
people.sort((a,b) => a.name > b.name);
console.log(people);
console.log(people[0].name+" : "+people[0].age);
