import ToDoAPI from './API/ToDoAPI';
import React, { useState, useEffect } from 'react';
import AddTodoForm from './AddTodoForm';
import TodoListItem from './TodoListItem';

const FavTodoList = ({ listID }) => {
  // const [checked, setChecked] = useState([]);
  const [favTodoList, setFavTodoList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  //const idList = listID;

  useEffect(() => {
    (async () => {
      const userToken = JSON.parse(localStorage.getItem('token'));
      let fetchedData = await ToDoAPI.getToDoList(listID, userToken);
      let favList = fetchedData.filter((item) => item.favorite === true);

      setFavTodoList(favList);
      setIsLoading(false);
    })();
  }, [isLoading]);

  // This function sends todo to list--sb
  const addFavTodo = async (todo, listID) => {
    const userToken = JSON.parse(localStorage.getItem('token'));
    let newTodo = await ToDoAPI.addFavToDo(listID, todo, userToken);
    setFavTodoList([...favTodoList, newTodo]);
  };

  // This function deletes todo--sb
  const removeTodo = async (todo) => {
    const userToken = JSON.parse(localStorage.getItem('token'));
    let newTodoList = await ToDoAPI.deleteToDo(todo, favTodoList, userToken);
    setFavTodoList(newTodoList);
    setIsLoading(false);
  };

  // this function calls API for new title and sets the updated list as a result
  const updateToDoList = async (newTodo) => {
    const userToken = JSON.parse(localStorage.getItem('token'));
    let updTodoList = await ToDoAPI.updateToDo(newTodo, favTodoList, userToken);
    setFavTodoList(updTodoList);
    setIsLoading(false);
  };

  const updateFavorite = async (newTodo) => {
    const userToken = JSON.parse(localStorage.getItem('token'));
    let updTodoList = await ToDoAPI.updateFav(newTodo, favTodoList, userToken);
    setFavTodoList(updTodoList.filter((item) => item.favorite === true));
  };

  return (
    <div>
      <h1 id="empty"></h1>
      <AddTodoForm addTodo={addFavTodo} idList={listID} />

      <ul className='todo_list_item'>
        {favTodoList.map((todo) => (
          <TodoListItem
            key={todo._id}
            todo={todo}
            removeTodo={removeTodo}
            onChange={updateToDoList}
            onFave={updateFavorite}
          />
        ))}
      </ul>
    </div>
  );
};

export default FavTodoList;
