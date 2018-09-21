// class Counter {
//   private int count = 0;
// 
//   public String increment(){
//     return ++count + "time(s).";
//   }
// }
// 
// Counter counter = new Counter();
// System.out.println(counter.increment());
// System.out.println(counter.increment());


const f = (function() {
  let count = 0;
  return function increment() { 
    return `${++count} time(s).`;
  }
})();

console.log(f()); // "I have been called 1 time(s)."
console.log(f()); // "I have been called 2 time(s)."






