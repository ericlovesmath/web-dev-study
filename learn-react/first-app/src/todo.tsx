import React from "react";

type todo = {
  todo: string;
};

function TodoList({ todo }: todo) {
  return (
    <div>
      {todo}
    </div>
  )
}

export default TodoList;
