var arr = Array(10).map(function(x) { return 5 });
console.log(arr);

var arr = Array(10);
arr.fill(1);
console.log(arr);

var arr = [1,2,3,4,5,];
delete arr[2];
//해당 방에 값이 삭제되지만 방은 보존된다.
//일반적으로 splice 함수를 사용하여 방자체를 삭제합니다.
console.log(arr);

var ret = arr.map(x=>0);
console.log(ret);
console.log(arr);

arr[3] = undefined;


var arr = [1, null, "hello", "world", true, undefined];
delete arr[3];
arr.join(); // "1,,hello,,true,"
arr.join(''); // "1hellotrue"
arr.join(' -- '); // "1 -- -- hello -- -- true --
console.log(arr);

const attributes = ["Nimble", "Perceptive", "Generous"];
//-------------1번
// const html =
// '<ul><li>' + attributes.join('</li><li>') + '</li></ul>';
//-------------2번
// html: "<ul><li>Nimble</li><li>Perceptive</li><li>Generous</li></ul>";
//-------------3번
// const html =
//   <ul>
//       <li>${attributes[0]}</li>
//       <li>${attributes[1]}</li>
//       <li>${attributes[2]}</li>
//   </ul>
//=============4번
const html =`
  <ul>
      <li>
      ${attributes.join(' </li><li> ')}
      </li>

  </ul>
  `;
console.log(html);
