import ToDoAPI from './API/ToDoAPI';
import React, { useState, useEffect } from 'react';
import AddTodoForm from './AddTodoForm';
import TodoListItem from './TodoListItem';
import { useLocation } from 'react-router';

//function to assemble and dissemble list: checkbox, title, fave, edit, trash

const TodoList = ({ listID }) => {
  //const [todoList, setTodoList] = useSemiPersistentState();
  const [checked, setChecked] = useState([]);
  const [todoList, setTodoList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  //console.log('todolist list ID here', listID);
  // const userToken = JSON.parse(localStorage.getItem('token'));
  const idList = listID;
  //console.log(idList);

  useEffect(() => {
    (async () => {
      const userToken = JSON.parse(localStorage.getItem('token'));
      let fetchedData = await ToDoAPI.getToDoList(listID, userToken);
      // console.log('todolist list ID here', listID);
      //console.log(fetchedData);

      setTodoList(fetchedData);

      setIsLoading(false);
    })();
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
  const addTodo = async (todo, listID) => {
    // console.log('todo', todo, 'listID', listID);
    const userToken = JSON.parse(localStorage.getItem('token'));
    let newTodo = await ToDoAPI.addToDo(listID, todo, userToken);
    setTodoList([...todoList, newTodo]);
    // console.log(newTodo);
  };

  // This function deletes todo--sb
  const removeTodo = async (todo) => {
    const userToken = JSON.parse(localStorage.getItem('token'));
    let newTodoList = await ToDoAPI.deleteToDo(todo, todoList, userToken);
    //console.log(newTodoList);
    setTodoList(newTodoList);
    setIsLoading(false);
  };

  // this function calls API for new title and sets the updated list as a result
  const updateToDoList = async (newTodo) => {
    const userToken = JSON.parse(localStorage.getItem('token'));
    let updTodoList = await ToDoAPI.updateToDo(newTodo, todoList, userToken);
    setTodoList(updTodoList);
    setIsLoading(false);
  };

  return (
    <>
      <h1 className='header_sec'>To Do List</h1>
      <AddTodoForm addTodo={addTodo} idList={listID} />

      <ul className='todo_list_item'>
        {todoList.map((todo) => (
          <TodoListItem
            key={todo._id}
            todo={todo}
            handleCheck={handleCheck}
            removeTodo={removeTodo}
            onChange={updateToDoList}
          />
        ))}
      </ul>
    </>
  );
};

export default TodoList;
