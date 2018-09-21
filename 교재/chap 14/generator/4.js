// Array implements Iterable

let array = [1, 2, 3];

// Iterable
let iter = array[Symbol.iterator]();

console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log('-------------');

for (let item of array) {
  console.log(item);
}
