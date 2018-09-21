let str = ' something ';
console.log(str.length);

let result = str.trim();

console.log(result);
console.log(result.length);

let result2 = str.replace(/^\s|\s$/g, '');
console.log(result2);
console.log(result2.length);

const beer99 = "99 bottles of beer on the wall " +
 "take 1 down and pass it around -- " +
 "98 bottles of beer on the wall.";
 
const match = beer99.match(/[0-9][0-9][0-9]|[0-9][0-9]|[0-9]/);





let name = "Heungmin Son";
name = name.replace(/(\w+)\s(\w+)/, "$2 $1");
console.log(name); // Son Heungmin





