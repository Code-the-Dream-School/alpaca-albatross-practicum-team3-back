import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {FaTrashAlt, FaEdit, FaRegStar, FaStar} from "react-icons/fa"

//Function creates list item with checkbox, todo.title, star, edit, remove.--sb

const TodoListItem = ({ todo, removeTodo, onChange, handleCheck, onFave }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(todo.title);
  const [favorite, setFavorite] = useState(todo.favorite);

  // this function is processing editing mode
  const editTodo = (event) => {
    // console.log(event.target.value);
    setIsEditing(!isEditing);
    event.preventDefault();
    event.stopPropagation();
  };
  // this functino saves new title and calls update todo API
  const saveTodo = (event) => {
    setIsEditing(!isEditing);
    event.preventDefault();
    event.stopPropagation();
    todo.title = newTitle;
    onChange(todo);
  };

  const saveFav = (event) => {
    event.preventDefault();
    event.stopPropagation();
    // setFavorite(!favorite)
    if (todo.favorite === true) {
      todo.favorite = false;
    } else {
      todo.favorite = true;
    }
    onFave(todo);
  };

  let items = {};

  if (isEditing) {
    items = (
      <span>
        <input
          type='text'
          defaultValue={todo.title}
          onChange={(e) => setNewTitle(e.target.value)}
          onKeyDown={(event) => {
            if (event.key === 'Enter' || event.key === 'Escape') {
              saveTodo(event);
            }
          }}
        />
        <button
          className='Editbtn'
          type='submit'
          onClick={(event) => saveTodo(event)}
        >
          Save
        </button>
      </span>
    );
  } else {
    items = (
      <span onClick={editTodo}>
        {todo.title}
        <button className='Editbtn' type='button' onClick={editTodo}>
        <FaEdit/>
        </button>
      </span>
    );
  }
  let faveBtn = {};

  if (todo.favorite === true) {
    faveBtn = (
      <span>
        <button className='Favbtn' type='button' onClick={saveFav}>
          <FaStar/>
        </button>
      </span>
    );
  } else {
    faveBtn = (
      <span>
        <button className='Favbtn' type='button' onClick={saveFav}>
        <FaRegStar/>
        </button>
      </span>
    );
  }
  return (
    <>
      <li className='todo_list_item' key={todo._id}>
        <input value={todo.title} type='checkbox' onChange={handleCheck} />
        {items}
        <span>
          {faveBtn}
          <button
            className='Removebtn'
            type='button'
            onClick={() => removeTodo(todo)}
          >
            <FaTrashAlt/>
          </button>
        </span>
      </li>
    </>
  );
};

export default TodoListItem;
