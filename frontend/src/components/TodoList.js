import axios from 'axios';
import React, { useState, useEffect } from 'react';
import AddTodoForm from './AddTodoForm';
import TodoListItem from './TodoListItem';

//function to assemble and dissemble list: checkbox, title, fave, edit, trash

const TodoList = () => {
  //const [todoList, setTodoList] = useSemiPersistentState();
  const [checked, setChecked] = useState([]);
  const [todoList, setTodoList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get('http://localhost:3001/api/v1/todos?list=636ecac0e0a63a39c7e6217a', {
        headers: {
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MzZlYmUzNGUwYTYzYTM5YzdlNjIxNzMiLCJ1c2VybmFtZSI6Imxpc2FubmEiLCJpYXQiOjE2NjgyMDQ0NTEsImV4cCI6MTY2ODI5MDg1MX0.yvqj2N1E_2DvuPE-5RbW59zjDAWE0SqTSY0xTGNNZ84',
          'Content-Type': 'application/json',
          accept: '*/*',
        },
      })
      .then((result) => {
        // console.log(result.data.todos);
        setTodoList(result.data.todos); // not working
        setIsLoading(false);
        console.log(todoList);
        console.log(result.data.todos);
        console.log(isLoading);
      })
      .catch((error) => console.log('Whoops, something went wrong!', error));
  }, [isLoading]);

  // Checkbox. Add Strikethrough in css. Can use: const isChecked = (todo) =>checked.includes(todo) ? "checked-todo" : "not-checked-todo"; <span className={isChecked(item)}>{item}</span> .checked-item {text-decoration: line-through;}--sb

  const handleCheck = (e) => {
    let updatedList = [...checked];
    if (e.target.checked) {
      updatedList = [...checked, e.target.value];
    } else {
      updatedList.splice(checked.indexOf(e.target.value), 1);
    }
    setChecked(updatedList);
  };

  // This function sends todo to list--sb
  const addTodo = (newTodo) => {
    setTodoList([...todoList, newTodo]);
  };

  // This function deletes todo--sb
  const removeTodo = (id) => {
    const newTodoList = todoList.filter((todo) => id !== todo.id);
    setTodoList(newTodoList);
  };

  return (
    <>
      <h1>Todo List</h1>
      <AddTodoForm addTodo={addTodo} />

      <ul>
        {todoList.map((todo) => (
          <TodoListItem
            key={todo.id}
            todo={todo}
            handleCheck={handleCheck}
            removeTodo={removeTodo}
          />
        ))}
      </ul>
    </>
  );
};

export default TodoList;
