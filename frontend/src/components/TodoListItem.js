import React, { useState } from 'react';

//Function creates list item with checkbox, todo.title, star, edit, remove.--sb

const TodoListItem = ({
  todo,
  removeTodo,
  onChange,
  handleCheck,
  handleStar,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(todo.title);

  // this function is processing editing mode
  const editTodo = (event) => {
    console.log(event.target.value);
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
          Edit
        </button>
      </span>
    );
  }
  return (
    <>
      <li className='todo_list' key={todo._id}>
        <input value={todo.title} type='checkbox' onChange={handleCheck} />
        {items}
        <span>
          <button className='Favbtn' type='button' onClick={handleStar}>
            Favorite
          </button>
          <button
            className='Removebtn'
            type='button'
            onClick={() => removeTodo(todo)}
          >
            Remove Button
          </button>
        </span>
      </li>
    </>
  );
};

export default TodoListItem;
