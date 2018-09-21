const buttonAdd = document.getElementById('buttonAdd');
const inputTitle = document.getElementById('inputTitle');
const target = document.getElementById('target');

let todos = [];
let id = 0;

// 배열에 추가하는 함수
function addTodo(title) {
  id++;
  todos.push({ id, title, done:false });
}

// 배열의 데이터를 조회하는 함수
function getTodos() {
  return todos;
}

function init() {
  let todos = getTodos();
  let html = [];
  for (let todo of todos) {
    html.push(`
    <tr>
      <td>${todo.id}</td>
      <td class=${todo.done? "done": ""}>${todo.title}</td>
      <td>
        <button type="button" onclick="buttonDone(${todo.id})">완료</button>
        <button type="button" onclick="buttonDelete(${todo.id})">삭제</button>
      </td>
    </tr>
    `);
  }
  target.innerHTML = html.join('');
}

buttonAdd.onclick = function() {
  const title = inputTitle.value.trim();
  if (title) {
    addTodo(inputTitle.value);
    init();
    inputTitle.value = '';
  }
};

function buttonDone(id) {
  let todo = todos.find(o => o.id === id);
  todo.done = !todo.done;
  init();
}

function buttonDelete(id) {
  let i = todos.findIndex(o => o.id === id);
  todos.splice(i, 1);
  init();
}
