import React from "react";

//Function creates list item with remove button. 

const TodoListItem = ({ todo, onRemoveTodo }) => {
  return (
      
    <li key={todo.id}>
      {todo.title}
      <button type="button" onClick={() => onRemoveTodo(todo.id)}>Remove Button</button>
    </li> 
      
  );
};





export default TodoListItem;