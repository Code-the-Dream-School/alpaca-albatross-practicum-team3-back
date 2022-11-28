import ToDoAPI from './API/ToDoAPI';
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
    (async () => {
      let fetchedData = await ToDoAPI.getToDoList();
      // console.log(fetchedData);
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
  const addTodo = async (title) => {
    let newTodo = await ToDoAPI.addToDo(title);
    setTodoList([...todoList, newTodo]);
  };

  // This function deletes todo--sb
  const removeTodo = (id) => {
    console.log(id);
    const newTodoList = todoList.filter((todo) => id !== todo.id);
    console.log(newTodoList);
    setTodoList(newTodoList);
  };

  return (
    <>
      <h1 className='header_sec'>To Do List</h1>
      <AddTodoForm addTodo={addTodo} />

      <ul className='todo_list_item'>
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
