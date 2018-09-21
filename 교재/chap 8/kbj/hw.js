// 완료 : boolean

let todos = [
  // { id: 1, title: '아내에게 선물 사주기', done: false }
];

// 배열에 추가하는 함수
function addTodo(title) {
  let id = todos.length + 1;
  let todo = {
    id,
    title,
    done: false
  };
  todos.push(todo)
}

// console.log(todos);
// addTodo('저녁에 운동');
// console.log(todos);

// 배열의 데이터를 조회하는 함수
function getTodos() {
  return todos;
}

// 배열의 객체의 done 값을 변경하는 함수 #A
function doneTrue(id) {
  todos[id-1].done = true;
  // todos[id-1].done = !todos[id-1].done;
}

// 배열의 해당 객체를 삭제하는 함수 #B
function doneFalse(id) {
  todos[id-1].done = false;
}
