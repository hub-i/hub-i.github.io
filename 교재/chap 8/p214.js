const cart = [
   { name: "Widget", price: 9.95 },
   { name: "Gadget", price: 22.95 }
 ];

const names = cart.map(x => x.name); // ["Widget", "Gadget"]
const prices = cart.map(x => x.price); // [9.95, 22.95]
const discountPrices = prices.map(x => x*0.8); // [7.96, 18.36]
const lcNames = names.map(item=>item.toLowerCase()); // ["widget", "gadget"]


console.log(names); // 새로운 배열을 리턴한다.
console.log(prices);
console.log(discountPrices); // 새로운 배열을 리턴한다.
console.log(lcNames);
//구글에서 수학 함수 사상 ""검색
//사상(map)
//배열의 아이템을 꺼내서 함수에 전달하고
//함수가 리턴하는 값으로 치환한다.
