require('core-js/fn/array/values');
const log = console.log;

const book = [
 "Twinkle, twinkle, little bat!",
 "How I wonder what you're at!",
 "Up above the world you fly,",
 "Like a tea tray in the sky.",
 "Twinkle, twinkle, little bat!",
 "How I wonder what you're at!",
];

const it = book.values();
log(typeof it);

log(it.next()); // { value: "Twinkle, twinkle, little bat!", done: false }
log(it.next()); // { value: "How I wonder what you're at!", done: false }
log(it.next()); // { value: "Up above the world you fly,", done: false }
log(it.next()); // { value: "Like a tea tray in the sky.", done: false }
log(it.next()); // { value: "Twinkle, twinkle, little bat!", done: false }
log(it.next()); // { value: "How I wonder what you're at!", done: false }
log(it.next()); // { value: undefined, done: true }
log(it.next()); // { value: undefined, done: true }
log(it.next()); // { value: undefined, done: true }

