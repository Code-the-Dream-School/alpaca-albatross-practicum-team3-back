import React, { useEffect, useState } from 'react';
import axios from 'axios';

//const API_URL = `${process.env.REACT_APP_BASE_URL}`;
//Function creates list item with checkbox, todo.title, star, edit, remove.--sb

const TodoListItem = ({ todo, removeTodo, handleCheck, handleStar }) => {
  /* const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState();

  function handleSubmitTodo(event, id) {
    setIsEditing(false);
    event.preventDefault();
    event.stopPropagation();
    const result = axios
      // update item in DB
      .post(API_URL, id, newTitle)
      // get updated list
      .get(API_URL)
      .then((response) => {
        setTodoList(response);
      });
  }
  const editTodo = (todo) => {
    setIsEditing(true);
    setNewTitle(todo.title);
    console.log(newTitle, isEditing);
    if (isEditing) {
      return (
        <form onSubmit={(event) => handleSubmitTodo(event, todo.id)}>
          <input
            className='input'
            value={todo.title}
            onChange={(e) => setNewTitle(e.target.value)}
            placeholder='edit...'
          ></input>
          <button type='submit' className='ok-icon'>
            OK
          </button>
          <button
            type='button'
            className='cancel-icon'
            onClick={() => setIsEditing(false)}
          >
            Cancel
          </button>
        </form>
      );
    }
  };*/

  return (
    <li className='todo_list' key={todo.id}>
      <input value={todo.title} type='checkbox' onChange={handleCheck} />
      {todo.title}
      <button className='Favbtn' type='button' onClick={handleStar}>
        Favorite
      </button>
      <button className='Editbtn' type='button'>Edit</button>
      <button
         className='Removebtn' type='button'
        onClick={() => removeTodo(todo.id)}
        // onEditTodo={editTodo}
      >
        Remove Button
      </button>
    </li>
  );
};

export default TodoListItem;
