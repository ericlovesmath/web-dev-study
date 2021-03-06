// Selectors

const todoInput = document.querySelector(".todo-input") as HTMLInputElement;
const todoButton = document.querySelector(".todo-button") as HTMLButtonElement;
const todoList = document.querySelector(".todo-list") as HTMLUListElement;
const filterOption = document.querySelector(".filter-todo") as HTMLSelectElement;

// Functions

const addTodo = (event: Event) => {
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

    // Add Todo to localStorage
    saveLocalStorage(todoInput.value);

    // Clear Todo input value
    todoInput.value = "";
}

const deleteOrCheck = (event: Event) => {
    // Get item that was clicked on
    const item = event.target as Element;

    // Delete Todo
    if (item.classList[0] === "trash-btn") {
        const todo = item.parentElement as HTMLDivElement;

        // Animation, then remove
        todo.classList.add("fall");
        removeLocalTodos(todo);
        todo.addEventListener('transitionend', () => todo.remove());
    }

    // Complete Todo
    if (item.classList[0] === "complete-btn") {
        const todo = item.parentElement!;
        todo.classList.toggle("completed");
    }
}

const filterTodo = (event: Event) => {
    const todos = todoList.childNodes as NodeListOf<HTMLDivElement>;
    todos.forEach((todo) => {
        switch ((<HTMLOptionElement>event.target).value) {
            case "all":
                todo.style.display = "flex";
                break;
            case "completed":
                if (todo.classList.contains("completed")) {
                    todo.style.display = "flex";
                } else {
                    todo.style.display = "none";
                }
                break;
            case "uncompleted":
                if (todo.classList.contains("completed")) {
                    todo.style.display = "none";
                } else {
                    todo.style.display = "flex";
                }
        }
    })
}

const saveLocalStorage = (todo: string) => {
    // Check if already in localStorage
    let todos: string[];
    if (localStorage.getItem("todos") === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem("todos")!);
    }
    todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(todos));
}

const getTodos = () => {
    // Check if already in localStorage
    let todos: string[];
    if (localStorage.getItem("todos") === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem("todos")!);
    }
    todos.forEach((todo) => {
        // Create Todo div
        const todoDiv = document.createElement("div");
        todoDiv.classList.add("todo"); // <div class="todo"></div>

        // Create li, add to Todo div
        const newTodo = document.createElement("li");
        newTodo.innerText = todo;
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
    })
}

const removeLocalTodos = (todo: HTMLDivElement) => {
    // Check if already in localStorage
    let todos: string[];
    if (localStorage.getItem("todos") === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem("todos")!);
    }
    const todoIndex = (<HTMLLIElement>todo.children[0]).innerText;
    todos.splice(todos.indexOf(todoIndex), 1);
    localStorage.setItem("todos", JSON.stringify(todos));
}

// Event Listeners

document.addEventListener("DOMContentLoaded", getTodos);
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteOrCheck);
filterOption.addEventListener("click", filterTodo);


// TODO: Save State of completion to, maybe as object?
// TODO: Highlight todo comments
// TODO: Refactor code
// TODO: AddTodo vs getTodos into smaller functions
//      How to call function with param in .addEventListener?
