import React, { useState } from "react";
import EditForm from "./Forms.js/EditForm";

//Function creates list item with remove button. Add checkbox, edit, favorite here.

const TodoListItem = ({ todo, onRemoveTodo, setCurrentTodo, currentTodo, setTodoList }) => {
  
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = (todoTitle) => {
    setIsEditing(true);
    setCurrentTodo({ ...todoTitle });
  };
  
  console.log(todo.id);
  return (
      
    <li key={todo.id}>
      
      {todo.title}

      {!isEditing ?
        <button type="button" onClick={() => handleEditClick(todo.title)}>Edit</button>
        :
        <EditForm
          setTodoList={setTodoList}
          setCurrentTodo={setCurrentTodo}
          currentTodo={currentTodo}
          setIsEditing={setIsEditing} 
          />
      }

      
      <button type="button" onClick={() => onRemoveTodo(todo.id)}>Remove Button</button>
      
    </li>       
  );
};

export default TodoListItem;