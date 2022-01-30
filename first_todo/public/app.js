"use strict";
// Selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
// Functions
const addTodo = (event) => {
    // Disables default effect of refreshing page
    event.preventDefault();
    // Create Todo div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo"); // <div class="todo"></div>
    // Create li, add to Todo div
    const newTodo = document.createElement("li");
    newTodo.innerText = todoInput.value;
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);
    // Create Check Button, add to Todo div
    const completedButton = document.createElement("button");
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);
    // Create Trash Button, add to Todo div
    const trashButton = document.createElement("button");
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);
    // Append Todo div to List
    todoList.appendChild(todoDiv);
    // Clear Todo input value
    todoInput.value = "";
};
// Event Listeners
todoButton.addEventListener("click", addTodo);
// const anchor = document.querySelector("a")!;
// const circ = (diameter: number) => {
//     return diameter * Math.PI;
// }
// console.log(circ(10));
