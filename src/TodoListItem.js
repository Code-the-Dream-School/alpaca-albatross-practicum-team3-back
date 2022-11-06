import React, { useState } from "react";
import EditForm from "./EditForm";

//Function creates list item with remove button. Add checkbox, edit, favorite here.

const TodoListItem = ({ todo, onRemoveTodo, setCurrentTodo, currentTodo, setTodoList, handleCheck, handleStar }) => {
  
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = (todoTitle) => {
    setIsEditing(true);
    setCurrentTodo({ ...todoTitle });
  };
  
  return (
      
    <li key={todo.id}>
      <input value={todo.title} type="checkbox" onChange={handleCheck} />
      {todo.title}

      <button type="button" onClick={handleStar}>Favorite</button>
      <button type="button" onClick={() => handleEditClick(todo.title)}>Edit</button>
      <button type="button" onClick={() => onRemoveTodo(todo.id)}>Remove Button</button>
      
    </li>       
  );
};

export default TodoListItem;