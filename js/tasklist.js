// Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const filterOption = document.querySelector('.filter-todo');



// Event Listeners
document.addEventListener('DOMContentLoaded', getTodos);

todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);
filterOption.addEventListener('click', filterTodo)



// Functions

function addTodo(event) {
  //Prevent form from submitting
  event.preventDefault();
  // Todo Div
  const todoDiv = document.createElement('div');
  todoDiv.classList.add("todo");
  //Create Li
  const newTodo = document.createElement('li');
  newTodo.innerText = todoInput.value;
  newTodo.classList.add('todo-item');
  todoDiv.appendChild(newTodo);
  //Add todo to local storage
  saveLocalTodos(todoInput.value);

  //Check mark Button

  const completedButton = document.createElement('button');
  completedButton.innerHTML = '<i class="fas fa-check"></i>';
  completedButton.classList.add("complete-btn");
  todoDiv.appendChild(completedButton);

  // Delete Button

  const deleteButton = document.createElement('button');
  deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
  deleteButton.classList.add("delete-btn");
  todoDiv.appendChild(deleteButton);

  //Append to list
  todoList.append(todoDiv);
  //Clear todoInput value
  todoInput.value = "";
}

function deleteCheck(e) {

  const item = e.target;
  //Delete Todo
  if (item.classList[0] === "delete-btn") {
    const todo = item.parentElement;
    // Animation
    todo.classList.add('fall');
    removeLocalTodos(todo);
    todo.addEventListener('transitionend', function () {

      todo.remove();
    });

  }

  //Check Mark
  if (item.classList[0] === "complete-btn") {

    const todo = item.parentElement;
    todo.classList.toggle("completed");
  }

}

function filterTodo(e) {
  const todos = todoList.childNodes;
  todos.forEach(function (todo) {

    if (todo.classList !== undefined) {
      switch (e.target.value) {
        case "all":
          todo.style.display = "flex";
          break;
        case "completed":
          if (todo.classList.contains('completed')) {
            todo.style.display = "flex";
          } else {
            todo.style.display = "none";
          }
          break;
        case "uncompleted":
          if (!todo.classList.contains('completed')) {
            todo.style.display = "flex";
          } else {
            todo.style.display = "none";
          }
          break;
      }
    }
    return;
  })
}


function saveLocalTodos(todo) {

  // Check if have todo in local storage

  let todos;

  if (localStorage.getItem('todos') === null) {
    todos = [];

  } else {
    todos = JSON.parse(localStorage.getItem('todos'));

  }

  todos.push(todo);
  localStorage.setItem('todos', JSON.stringify(todos));
}


function getTodos() {

  let todos;

  if (localStorage.getItem('todos') === null) {
    todos = [];

  } else {
    todos = JSON.parse(localStorage.getItem('todos'));

  }

  todos.forEach(function (todo) {

    const todoDiv = document.createElement('div');
    todoDiv.classList.add("todo");
    //Create Li
    const newTodo = document.createElement('li');
    newTodo.innerText = todo;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);

    //Check mark Button

    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);

    // Delete Button

    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
    deleteButton.classList.add("delete-btn");
    todoDiv.appendChild(deleteButton);

    //Append to list
    todoList.append(todoDiv);
  });
}

function removeLocalTodos(todo) {

  if (localStorage.getItem('todos') === null) {
    todos = [];

  } else {
    todos = JSON.parse(localStorage.getItem('todos'));

  }

  const todoIndex = todo.children[0].innerText;
  todos.splice(todos.indexOf(todoIndex), 1);
  localStorage.setItem('todos', JSON.stringify(todos));
}