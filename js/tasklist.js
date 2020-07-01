// Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');



// Event Listeners

todoButton.addEventListener('click', addTodo);



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