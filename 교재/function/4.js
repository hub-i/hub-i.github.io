/*
  조건문
*/

var isOk = true;

if (isOk) {
  console.log("isOk = " + isOk);
}

var val1 = 10, val2 = 9;

if (val1 > val2) {
  console.log("10은 9보다 큽니다.");
}

function add(a, b) {
  return a+b;
}

if (add(3, 2) >= 5) {
  console.log("참 입니다.");
} else {
  console.log("거짓 입니다.");
}

console.log(add(3, 2) >= 5 ? "참 입니다." : "거짓 입니다.");

var array = [10, 20, 30];

for (var i = 0; i < array.length; i++) {
  console.log("array["+i+"] = " + array[i]);
}

var object = {x:10, y:20};

// for~in 문은 객체의 프로퍼티(속성, 자바의 멤버변수) 개수만큼
// 하나씩 자동으로 회전하여 수행됩니다.
for (var prop in object) {
  // if (object.hasOwnProperty(prop)) {
    console.log("object["+prop+"] = " + object[prop]);
  // }
}

var iterable = array;

// for~of 문은 iterable 객체를 대상으로 사용합니다.
// 배열은 이미 iterable 객체입니다.
for (item of iterable) {
  console.log("item = " + item);
}

var k = 0;
while (k < 3) {
  console.log("k = " + k);
  k++;
}

var k = 0;
for (; k < 3; ) {
  console.log("k = " + k);
  k++;
}

k = 10;
do { // 로직을 무조건 한번 이상은 수행해야 한다고 판단될 때
  console.log("k = " + k);
  k++;
} while (k < 3);

var rank = "silver";

if (rank == "gold") {
  console.log("골드 등급입니다.");
} else if (rank == "silver") {
  console.log("실버 등급입니다.");
} else {
  console.log("브론즈 등급입니다.");
}

console.log("---------");

rank = "bronze";

switch (rank) {
  case "gold":
    console.log("골드 등급입니다.");
    coupon();
    // break;
  case "silver":
    console.log("실버 등급입니다.");
    coupon();
    // break;
  default:
    console.log("브론즈 등급입니다.");
    coupon();
}

function coupon() {
  console.log("쿠폰이 1장 발급되었습니다.");
}
