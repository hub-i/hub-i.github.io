// Iterable
let iterable = {
    array: [1, 2, 3],
    nextIndex: 0,
    [Symbol.iterator]: function(){
        return {
            array: this.array,
            nextIndex: this.nextIndex,
            next: function(){
                return this.nextIndex < this.array.length ?
                {value: this.array[this.nextIndex++], done: false} :
                {value: undefined, done: true};
            }
        };
    }
};

// Iterator
let iter = iterable[Symbol.iterator]();

console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
