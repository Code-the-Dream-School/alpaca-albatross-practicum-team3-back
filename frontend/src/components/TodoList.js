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
  const addTodo = async (/*listID,*/ todo) => {
    let newTodo = await ToDoAPI.addToDo(/*listID,*/ todo);
    setTodoList([...todoList, newTodo]);
    //  console.log(newTodo);
  };

  // This function deletes todo--sb
  const removeTodo = async (/*listID,*/ todo) => {
    let newTodoList = await ToDoAPI.deleteToDo(todo, todoList);
    //console.log(newTodoList);
    setTodoList(newTodoList);
    setIsLoading(false);
  };

    // this function calls API for new title and sets the updated list as a result
    const updateToDoList = async (newTodo) => {
      let updTodoList = await ToDoAPI.updateToDo(newTodo, todoList);
      setTodoList(updTodoList);
      setIsLoading(false);
    };

  
// will go false but not true again
  
function Fave() {
  return "fave"
  }
  function NotFave() {
    return "not fave"
  }  
  const handleStar = () => {
    setToggle((toggle) => {
      if (toggle == true) {
        return <NotFave/>;
      } else{
        return <Fave/>;
      }
    });
  }
  

  return (
    <>
      <h1 className='header_sec'>To Do List</h1>
      <AddTodoForm addTodo={addTodo} />

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
