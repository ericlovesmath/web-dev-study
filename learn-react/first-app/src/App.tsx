import React, { useState } from 'react';
import TodoList from './todolist';

function App(): JSX.Element {
  const [todos, setTodos] = useState(['Todo 1', 'Todo 2'])
  return (
    <>
      <TodoList todos={todos}/>
      <input type="text" />
      <button>Add Todo</button>
      <button>Clear Completed Todo</button>
      <div>0 left todo</div>
    </>
  )
}

export default App;

