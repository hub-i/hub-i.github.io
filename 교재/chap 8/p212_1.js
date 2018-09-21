let a;

var arr = [
  { id: 5, name: "Judith" },
  { id: 7, name: "Francis" }
];

a=arr.findIndex(o => o.id === 7); // returns 0

arr.findIndex(o => o.name === "Francis"); // returns 1
arr.findIndex(o => o === 3); // returns -1
arr.findIndex(o => o.id === 17); // returns -1

console.log(a);

var arr = [
  { id: 5, name: "Judith" },
  { id: 7, name: "Francis" }];


arr.find(o => o.id === 5); // returns object { id: 5, name: "Judith" }
arr.find(o => o.id === 2); // returns null

console.log("-----------------------------------");

var arr = [1, 17, 16, 5, 4, 16, 10, 3, 49];
//배열 0,1,2 방의 값은 무시하고
//배열 3 이상의 방의 값중에서 스퀘어 루트 함수를 통해
//구한 결과가 정수인 경우 해당 배열 요소의 값을 리턴한다.
var ret = arr.find(
  (x, i) => {
    console.log('i = ',i);
  return i > 2 && Number.isInteger(Math.sqrt(x));
}
); // returns 4
console.log(ret);
