import React from 'react';
import TodoListItem from "./TodoListItem"

//function to assemble and dissemble list.

const TodoList = ({ todoList, onRemoveTodo, setCurrentTodo, currentTodo }) => {


  return (
    <ul>
      {todoList.map((todo) => (
        <TodoListItem
          key={todo.id}
          todo={todo}
          onRemoveTodo={onRemoveTodo}
          setCurrentTodo={setCurrentTodo}
          currentTodo={currentTodo}
        />
      ))}
    </ul>
  );
};

export default TodoList;