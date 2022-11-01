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

  const [todoList, setTodoList] = useSemiPersistentState();
  const [currentTodo, setCurrentTodo] = useState({});

  const addTodo = (newTodo) => {
    setTodoList([...todoList, newTodo])
  };

  const removeTodo = (id) => {
    const newTodoList = todoList.filter((todo) =>
      id !== todo.id);
    setTodoList(newTodoList)
  };

  const handleAddInputChange = (e) => {
    setTodoList(e.target.value);
  };





 



  return (
    <>
      <h1>Todo List Title</h1>
      
        <AddTodoForm
            onAddTodo={addTodo}
            onAddInputChange={handleAddInputChange}
          />
    

        <TodoList
          todoList={todoList}
          onRemoveTodo={removeTodo}
          setCurrentTodo={setCurrentTodo}
          currentTodo={currentTodo}  
        />
      
    </>
      );
};
export default App;