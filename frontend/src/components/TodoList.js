import ToDoAPI from './API/ToDoAPI';
import React, { useState, useEffect } from 'react';
import AddTodoForm from './AddTodoForm';
import TodoListItem from './TodoListItem';

//function to assemble and dissemble list: checkbox, title, fave, edit, trash

const TodoList = ({ listID }) => {
  //const [todoList, setTodoList] = useSemiPersistentState();
  const [checked, setChecked] = useState([]);
  const [todoList, setTodoList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  //const idList = listID;

  useEffect(() => {
    (async () => {
      const userToken = JSON.parse(localStorage.getItem('token'));
      let fetchedData = await ToDoAPI.getToDoList(listID, userToken);

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
    const userToken = JSON.parse(localStorage.getItem('token'));
    let newTodo = await ToDoAPI.addToDo(listID, todo, userToken);
    setTodoList([...todoList, newTodo]);
  };

  // This function deletes todo--sb
  const removeTodo = async (todo) => {
    const userToken = JSON.parse(localStorage.getItem('token'));
    let newTodoList = await ToDoAPI.deleteToDo(todo, todoList, userToken);
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

  const updateFavorite = async (newTodo) => {
    const userToken = JSON.parse(localStorage.getItem('token'));
    let updTodoList = await ToDoAPI.updateFav(newTodo, todoList, userToken);
    setTodoList(updTodoList);
  };

  return (
    <div className='notepad'>
      {/* <h1 className='header_sec'>To Do List</h1> */}
      <AddTodoForm addTodo={addTodo} idList={listID} />

      <ul className='todo_list'>
        {todoList.map((todo) => (
          <TodoListItem
            key={todo._id}
            todo={todo}
            handleCheck={handleCheck}
            removeTodo={removeTodo}
            onChange={updateToDoList}
            onFave={updateFavorite}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
