// Generator
function* some(){
    yield 1;
    yield 2;
    yield 3;
}

// Iterable
let iter = some();

console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log('-------------');

// Iterable
let iterable = some();

// Iterator
let iter2 = iterable[Symbol.iterator]();

console.log(iter2.next());
console.log(iter2.next());
console.log(iter2.next());
console.log(iter2.next());
