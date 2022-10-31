import React, {useEffect, useState} from 'react';
import AddTodoForm from './AddTodoForm';
import InputWithLabel from './InputWithLabel';
import TodoList from './TodoList';


// Function to preserve list upon refresh. Works with local storage.

const useSemiPersistentState = () => {
  
  const [todoList, setTodoList] = useState(
    JSON.parse(localStorage.getItem("savedTodoList")) || []
  );

  useEffect(() => {
    localStorage.setItem("savedTodoList", JSON.stringify(todoList));
  }, [todoList]);

  return [todoList, setTodoList];
};

function App() {

  const [todoList, setTodoList] = useSemiPersistentState();
  //const [editTodo, setEditTodo] = useState("")

  const addTodo = (newTodo) => {
    setTodoList([...todoList, newTodo])
  };

  const removeTodo = (id) => {
    const newTodoList = todoList.filter((todo) =>
      id !== todo.id);
    setTodoList(newTodoList)
  }; 
  
  // const editTodo = (id) => { setEditTodo (change text)}
    //onClick {onEditTodo} sends todoTitle back into InputWithLabel = {} then onSubmit sends changedTodo back to todoList


  return (
    <>
      <h1>Todo List</h1>
      <AddTodoForm onAddTodo={addTodo} />
      <TodoList todoList={todoList} onRemoveTodo={removeTodo} />
    </>
  );
};

export default App;

   //const editedTodo = new Map();
      //id.set(`{ editedTodo }`)
      // todoList.map((todo) => {
      //   if (id !== todo.id) {
      //     return {...todo, name: changedTodo} //return id: this.changedTodo?
      //   }
      //   return todo;
      // });
    //   setTodoList(editedTodo);
    // };