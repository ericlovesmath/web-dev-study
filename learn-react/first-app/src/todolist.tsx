import React from "react";
import Todo from "./todo";

type todoInput = {
  todos: string[];
};

function TodoList({ todos }: todoInput) {
  return (
    <>
      {todos.map(todo => {
        return <Todo todo={todo} />
      })}
    </>
  )
}

export default TodoList;
