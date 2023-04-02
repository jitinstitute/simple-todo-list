const inputField = document.getElementById("todoinput");
const addToListBtn = document.getElementById("addtolist");
const todolist = document.getElementById("todolist");
const updatetolist = document.getElementById("updatetolist");

function addToList(event) {
  let todo = inputField.value;
  if (!todo) {
    alert("Please enter something To-do");
  } else {
    todolist.innerHTML += `
    <li class="list-group-item">
    <div class="d-flex align-items-center justify-content-between">
      <p class="mb-0">${todo}</p>
      <div>
        <button
          class="btn btn-success btn-sm"
          onclick="updateTodo(event)"
        >
          Update
        </button>
        <button class="btn btn-danger btn-sm" onclick="deleteTodo(event)">
          Delete
        </button>
      </div>
    </div>
  </li>
    `;
  }
  event.preventDefault();
}

// delete to do list
function deleteTodo(event) {
  const element = event.target.parentElement.parentElement.parentElement;
  element.remove();
  // console.log(element);
}

//update todo list
function updateTodo(event) {
  // prompt("update the list");
  let previous = event.target.parentElement.parentElement.children[0];
  // console.log(currentTodo)
  let current = prompt("Update the list", previous.innerText);
  previous.innerText = current;
}
