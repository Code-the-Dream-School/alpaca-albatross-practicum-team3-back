import React, {useEffect, useState} from 'react';
import AddTodoForm from './Forms.js/AddTodoForm';
import TodoList from './TodoList';
import EditForm from "./Forms.js/EditForm";


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


  return (
    <>
      <h1>Todo List Title</h1>
    
  
        <TodoList
          useSemiPersistentState={useSemiPersistentState}
        />
      
    </>
      );
};
export default App;