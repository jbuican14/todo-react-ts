import React, { useState } from 'react';

import NewTodo from './components/NewTodo.components';
import TodoList from './components/TodoList.components';
import { Todo } from './todo.model';

const App: React.FC  = () => {
  // const [todos, setTodos] = useState<{id: string; text: string }[]>([]);
  // OR create a file to model the type in todo.model.ts
  const [todos, setTodos] = useState<Todo[]>([]);

  const todoAddHandler = (text: string) => {
    setTodos(prevTodos => [...prevTodos, {id: Math.random().toString(), text: text}]);
  }

  const todoDeleteHandler = (todoId: string) => {
    setTodos(prevTodos => {
      return prevTodos.filter(todo => todo.id !== todoId);
    })
  }

  return (
    <div className="App">
      <NewTodo onAddTodo={todoAddHandler}/>
      <TodoList items={todos} onDeleteTodo={todoDeleteHandler}/>
    </div>
  );
}

export default App;
