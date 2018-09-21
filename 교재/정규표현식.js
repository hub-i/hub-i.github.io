var beer99 = "99 bottles of beer on the wall. " +
 "take 1 down and pass it around --. " +
 "98 bottles of beer on the wall.";

 /*
\d == [0-9]     // 숫자만
\D == [^0-9]    // 숫자만 빼고
\s == [ \t\v\n\r] //탭,스페이스,세로탭,줄바꿈 만..
\S == [^ \t\v\n\r] //탭,스페이스,세로탭,줄바꿈 빼고
\w == [a-zA-Z_]
\W == [^a-zA-Z_]

^[0-9] //대가로 안쪽에 쓰면 '숫자로 시작하는 ' 의 뜻이 된다.

 */


/*
const messyPhone = '(505) 555-1515';
const neatPhone = messyPhone.replace(/\D/g, '');

const match = beer99.match(/[0-9][0-9][0-9]|[0-9][0-9]|[0-9]/);
const match = beer99.match(/[0-9]{1,3}/); //1~3까지의 숫자
const match = beer99.match(/[0-9]{1,}/);  //1부터 ~무한대
const match = beer99.match(/[0-9]+/);   //위의 정규식이랑 같은 의미
*/

/*---------------------------------(중요)----------------------------------
  반복메타문자
  {n}                 //정확히는 n개             /d{5}/ 다섯자리 숫자에만 일치
  {n,}                //최소한 n개               /\{5}/ 다섯자링 이상의 숫자일치
  +                    //1개 이상                /[a-z]\d+/i는 글자후에 숫자한개이상
  {n,m}               //n~m개 까지               /\d{2,5}/ 2개,3개,4개,5개 숫자일치
  ?                   //

--------------------------------------------------------------------------*/


let name = "Heungmin Son";
name = name.replace(/{?:\w+\${\w+}});
console.log(name);
