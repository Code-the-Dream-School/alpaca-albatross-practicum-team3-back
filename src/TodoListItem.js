import React from "react";


//Function creates list item with checkbox, todo.title, star, edit, remove.--sb

const TodoListItem = ({ todo, onRemoveTodo, handleCheck, handleStar }) => {
  return (
      
    <li key={todo.id}>

      <input value={todo.title} type="checkbox" onChange={handleCheck} />
      {todo.title}
      <button type="button" onClick={handleStar}>Favorite</button>
      <button type="button" >Edit</button>
      <button type="button" onClick={() => onRemoveTodo(todo.id)}>Remove Button</button>
      
    </li>       
  );
};

export default TodoListItem;