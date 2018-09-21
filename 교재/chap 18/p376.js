const para1 = document.getElementsByTagName("p")[0];
console.log(para1.textContent);
console.log(para1.innerHTML);


// 태그도 문자열로 취급하여 그대로 화면에 출력한다.

//para1.textContent = "<i>modified</i> HTML file"; // 스탠다드 문법

//para1.innerText = "<i>modified</i> HTML file";  //위에것과 같으나 사투리같은것

para1.innerHTML = "<i>modified</i> HTML file";     //태그는 처리되고 문자열은 그냥 출력된다.


const p1 = document.createElement('p');
const p2 = document.createElement('p');
p1.textContent = "I was created dynamically!";
p2.textContent = "I was also created dynamically!";

const parent = document.getElementById('content');
const firstChild = parent.childNodes[0];//태그가 가지고 있는 자식들을 참조할 수 있다.

parent.insertBefore(p1, firstChild);
parent.appendChild(p2);
