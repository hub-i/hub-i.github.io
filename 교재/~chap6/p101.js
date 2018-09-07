const numStr = "33.3";
//const num = Number(numStr); //생성자 Number
//const num = parseInt(numStr); // 숫자로만 표기
const num = parseFloat(numStr)// 실수형으로만 표기
//const num = Number.parseFloat(numStr); //위의 내용과 같은의미

console.log(typeof num);
console.log(num);
console.log(numStr + 10); //33.310
console.log(num + 10);  //34.3 ==>Number생성자 이용

const a = parseInt("16 volts",10);  //volt는 무시되고 16
const b = parseInt("3a",16); //58
const c = parseFloat("15.5 kph") // 15.5
const z = parseInt("18") // 15.5

console.log(z)

const d=new Date();
const ts=d.valueOf();
console.log(ts);  //1536219153680, 1536219163440

const n =33.5;
//const s = n.toString();
const s = "" + n; //위의 것과 같은 의미 (숫자를 문자자료형으로 바꿔라)
console.log(typeof s);  //string
console.log(s+10);  //string
