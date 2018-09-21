function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}


// a@google.com
// b@naver.co.kr
// a-b@korea.org
// a@google.
// bnaver.co.kr
// 123@korea.org
// 111
// 아이디@한국.컴

console.log(validateEmail('a@google.com'));
console.log(validateEmail('a@google.'));
console.log(validateEmail('bnaver.co.kr'));


