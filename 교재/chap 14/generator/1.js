// Iterator
let iter = {
    array: [1, 2, 3],
    nextIndex: 0,
    next: function(){
        return this.nextIndex < this.array.length ?
        {value: this.array[this.nextIndex++], done: false} :
        {value: undefined, done: true};
    }
};

console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
