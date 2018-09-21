let todos =[
  {id:1 , title:'아내에게 선물 사주기',done:false}
];

//배열에 추가하는 함수
function addTodo(title){
  let id = todos.length +1;
  let todo ={
    id,
    title,
    done:false
  };
  todos.push(todo);
}
//------확인하기 위한 테그
// console.log(todos);
// addTodo('저녁에 운동하기')
// console.log(todos);

//=========확인끝

//배열의 데이터를 조회하는 함수
function getTodos(){
  return todos;
}
//배열의 객체의 done값을 변경하는 함수 #A

//배열의 객체에 함수를 삭제하는것.
