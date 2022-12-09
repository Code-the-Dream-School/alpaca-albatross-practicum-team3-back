import React, { useState } from 'react';
import AddTodoLabel from './AddTodoLabel';

// This function assembles form with input field--sb

const AddTodoForm = ({ addTodo, idList, spokenTodoItem }) => {
  const [todoTitle, setTodoTitle] = useState('');

  const handleTitleChange = (e) => {
    const newTodoTitle = spokenTodoItem ? spokenTodoItem : e.target.value;
    console.log('setting to do title');
    setTodoTitle(newTodoTitle);
  };

  if (spokenTodoItem) {
    const spokenTodoItemString = spokenTodoItem.toString();
    setTodoTitle(spokenTodoItemString);
  }

  const handleAddTodo = (e) => {
    e.preventDefault();
    // console.log(todoTitle);
    addTodo({ /*id: Date.now(),*/ title: todoTitle }, idList); // Id here must be removed because DB has its own id
    setTodoTitle('');
  };

  return (
    <form className='list-form' onSubmit={handleAddTodo}>
      <AddTodoLabel todoTitle={todoTitle} handleTitleChange={handleTitleChange}>
        Title
      </AddTodoLabel>
      <button className='Addbtn' type='submit'>
        Add
      </button>
    </form>
  );
};

export default AddTodoForm;
