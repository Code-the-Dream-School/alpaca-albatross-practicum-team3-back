import React from 'react';
import TodoListItem from "./TodoListItem"

//function to assemble and dissemble list.

const TodoList = ({ todoList, onRemoveTodo }) => {
  return (
    <ul>
      {todoList.map((todo) => (
      <TodoListItem key={todo.id} todo={todo} onRemoveTodo={onRemoveTodo} />
      ))}
    </ul>
  );
};

export default TodoList;