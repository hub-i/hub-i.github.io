var arr = Array(10).map(function(x) { return 5 });
console.log(arr);

var arr = Array(10); // 새 객체 만들어주기 패턴
// var arr = new Array(10);
arr.fill(5);
console.log(arr);

console.log('----------------');


var arr = [1, 2, 3, 4, 5];

delete arr[2]; 
// 해당 방에 값이 삭제된다. 방은 보존된다.
// 일반적으로 splice 함수를 사용하여 방자체를 삭제합니다.
console.log(arr);

var ret = arr.map(x => 0); 
console.log(ret); // [ 0, 0, <1 empty item>, 0, 0 ]
console.log(arr);

arr[3] = undefined;
arr[2] = 30;
console.log(arr);

console.log('----------------');



var arr = [1, null, "hello", "world", true, undefined];

delete arr[3];
console.log(arr);
// [ 1, null, 'hello', <1 empty item>, true, undefined ]

arr.join(); // "1,,hello,,true,"
arr.join(''); // "1hellotrue"
arr.join(' -- '); // "1 -- -- hello -- -- true --"




const attributes = ["Nimble", "Perceptive", "Generous"];

// const html = '<ul><li>' + 
//   attributes.join('</li><li>') + 
//   '</li></ul>';
  
// const html = `
//   <ul>
//     <li>${attributes[0]}</li>
//     <li>${attributes[1]}</li>
//     <li>${attributes[2]}</li>
//   </ul>
// `;

const html = `
  <ul>
    <li>
      ${attributes.join('</li><li>')}
    </li>
  </ul>
`;
// <ul>
//   <li>
//     Nimble</li><li>Perceptive</li><li>Generous
//   </li>
// </ul>
  
console.log(html);




